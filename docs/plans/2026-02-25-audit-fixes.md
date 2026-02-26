# Audit Fixes Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix all 18 issues found in the Feb 2025 security/quality audit of the 5e Discord bot.

**Architecture:** No new abstractions needed — these are targeted fixes to existing files. Each task touches one file or a tightly coupled pair. No test framework exists in this project, so verification is done by building (`npx tsc --noEmit`) and manual inspection.

**Tech Stack:** TypeScript, Express, Node.js, Redis (`redis` v4), `discord-interactions` library.

---

## Build command

```bash
cd /Users/julianranieri/Desktop/Code_Base/5e-discord-bot
npx tsc --noEmit
```

Expected output: no errors. Run this after every task.

---

### Task 1: Remove unauthenticated admin endpoint

**Problem:** `GET /get_all_commands` is publicly accessible and proxies Discord's API with the bot token.

**Files:**
- Modify: `src/api/routes.ts`
- Modify: `src/api/controllers.ts`

**Step 1: Remove the route**

In `src/api/routes.ts`, delete line 19:
```typescript
router.get('/get_all_commands', getCommands)
```

Also remove `getCommands` from the import on lines 3-7. The import block becomes:
```typescript
import {
  // deleteCommand,
  // createCommands
} from './controllers.js'
```

Since the import is now empty, remove it entirely. The file becomes:
```typescript
import express from "express"
import { verifyKeyMiddleware } from 'discord-interactions'
import interactionsController from "./interactionController.js"

var router = express.Router()

router.get('/', function (_req, res) {
  return res.sendFile("../public/index.html")
})
router.get('/index', function (_req, res) {
  return res.sendFile("../public/index.html")
})

// router.get('/create_command', createCommands)
// router.get('/delete_command/:id', deleteCommand)

router.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY as string), interactionsController)

export default router
```

**Step 2: Remove getCommands from controllers.ts export**

In `src/api/controllers.ts` line 89-93, remove `getCommands` from the export:
```typescript
export {
  deleteCommand,
  createCommands
}
```

**Step 3: Verify build**

```bash
npx tsc --noEmit
```
Expected: no errors.

**Step 4: Commit**

```bash
git add src/api/routes.ts src/api/controllers.ts
git commit -m "security: remove unauthenticated /get_all_commands endpoint"
```

---

### Task 2: Fix TypeScript parameter type in createCommands

**Problem:** `createCommands` has `req: Response` instead of `req: Request` (line 41 of controllers.ts).

**Files:**
- Modify: `src/api/controllers.ts:41`

**Step 1: Fix the parameter type**

Change line 41 from:
```typescript
async function createCommands(req: Response, res: Response, _next: NextFunction) {
```
To:
```typescript
async function createCommands(req: Request, res: Response, _next: NextFunction) {
```

**Step 2: Verify build**

```bash
npx tsc --noEmit
```
Expected: no errors.

**Step 3: Commit**

```bash
git add src/api/controllers.ts
git commit -m "fix: correct createCommands req parameter type from Response to Request"
```

---

### Task 3: Fix express.json() middleware placement

**Problem:** `app.use(express.json())` is registered after routes in `server.ts`. It currently serves no purpose (verifyKeyMiddleware handles /interactions body parsing, all other routes are GET). Its presence after routes is misleading and will silently not work if new POST routes are added.

**Fix:** Remove the orphaned `app.use(express.json())` line entirely. If future non-interaction POST routes are needed, they should add `express.json()` explicitly on those specific routes to avoid interfering with /interactions.

**Files:**
- Modify: `src/server.ts`

**Step 1: Remove the express.json() line and its comment**

Remove lines 18-20:
```typescript
// It's best to set up body-parser so that it does NOT apply to interaction
// routes.
app.use(express.json());
```

The server.ts becomes:
```typescript
import { config } from 'dotenv';
import { resolve } from 'path';
// configure .env
config({ path: resolve(__dirname, '../.env') });
import express from 'express'
import routes from './api/routes.js'
import { createClient } from 'redis';

// Create and configure express app
const app = express();

// Static
app.use(express.static("public"));

// add routes
app.use('/', routes)

// Setup redis
export const redisClient = createClient();
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.connect();

app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000');
});
```

**Step 2: Verify build**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/server.ts
git commit -m "fix: remove orphaned express.json() middleware that served no purpose"
```

---

### Task 4: Fix initiative — empty list crash in /in next

**Problem:** `getNextPosition` in `src/lib/initiative.ts` crashes with `(index + 1) % 0 = NaN` when the tracker is empty. Calling `/in next` on an empty list crashes.

**Files:**
- Modify: `src/lib/initiative.ts`

**Step 1: Add empty-list guard to handleNextResponse**

In `handleNextResponse` (line 131), add a guard after fetching listData:

Replace:
```typescript
async function handleNextResponse(req: Request, res: Response) {
  const redisKey = `${req.body.guild_id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  // get
  let currentPosition = await redisClient.get(currentPositionKey);
  const listData = await redisClient.hGetAll(redisKey);
  // set
  const nextPosition = getNextPosition(listData, currentPosition);
```

With:
```typescript
async function handleNextResponse(req: Request, res: Response) {
  const redisKey = `${req.body.guild_id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  // get
  let currentPosition = await redisClient.get(currentPositionKey);
  const listData = await redisClient.hGetAll(redisKey);

  if (Object.keys(listData).length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "Initiative list is empty. Use `/in add` to add entries." },
    });
  }

  // set
  const nextPosition = getNextPosition(listData, currentPosition);
```

**Step 2: Verify build**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/lib/initiative.ts
git commit -m "fix: guard /in next against empty initiative list crash"
```

---

### Task 5: Fix initiative — input validation on add

**Problem:** User-provided `name` and `value` in `/in add` are stored in Redis with no validation. A non-numeric `value` causes silent NaN sort errors. Arbitrarily long names consume unbounded memory.

**Files:**
- Modify: `src/lib/initiative.ts`

**Step 1: Add validation to handleAddResponse**

Replace `handleAddResponse` (lines 75-103):
```typescript
async function handleAddResponse(req: Request, res: Response) {
  const redisKey = `${req.body.guild_id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;

  const objectArrOptions = objectFromArray(req.body.data.options[0].options);
  const name: string = String(objectArrOptions.name).trim();
  const value: string = String(objectArrOptions.value).trim();

  if (name.length === 0 || name.length > 50) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "Name must be between 1 and 50 characters." },
    });
  }

  const numericValue = parseInt(value, 10);
  if (isNaN(numericValue)) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "Value must be a whole number (e.g. 18)." },
    });
  }

  // Enforce max 50 entries per guild
  const existingList = await redisClient.hGetAll(redisKey);
  if (Object.keys(existingList).length >= 50 && !(name in existingList)) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "Initiative list is full (max 50 entries). Use `/in remove` or `/in clear`." },
    });
  }

  // set
  await redisClient.hSet(redisKey, { [name]: String(numericValue) });
  // get
  const listData = await redisClient.hGetAll(redisKey);
  let currentPosition = await redisClient.get(currentPositionKey);
  // format
  const content = getFormattedListDataWithCurrentPosition(listData, currentPosition);

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content },
  });
}
```

**Step 2: Verify build**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/lib/initiative.ts
git commit -m "fix: validate initiative add inputs — max name length, numeric value, max 50 entries"
```

---

### Task 6: Fix initiative — remove gives no feedback when name not found

**Problem:** `handleRemoveResponse` calls `hDel` and silently succeeds even if the name doesn't exist in the hash.

**Files:**
- Modify: `src/lib/initiative.ts`

**Step 1: Check hDel return value**

Replace `handleRemoveResponse` (lines 105-129):
```typescript
async function handleRemoveResponse(req: Request, res: Response) {
  const redisKey = `${req.body.guild_id}-initiative`;
  const currentPositionKey = `${redisKey}-currentPosition`;
  const itemToRemoveKey: string = req.body.data.options[0].options[0].value;

  const deleted = await redisClient.hDel(redisKey, itemToRemoveKey);
  if (deleted === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: `"${itemToRemoveKey}" was not found in the initiative list.` },
    });
  }

  const listData = await redisClient.hGetAll(redisKey);
  const currentPosition = await redisClient.get(currentPositionKey);
  const content = getFormattedListDataWithCurrentPosition(listData, currentPosition);

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content },
  });
}
```

**Step 2: Verify build**

```bash
npx tsc --noEmit
```

**Step 3: Commit**

```bash
git add src/lib/initiative.ts
git commit -m "fix: initiative remove reports when entry not found"
```

---

### Task 7: Add null guards to all info.ts filter lookups

**Problem:** Every `.filter(...)[0]` call in `src/lib/info.ts` will crash with `TypeError` if the filtered result is `undefined` — e.g., `skillData.name` when `skillData` is `undefined`. This affects all direct-choice commands.

The affected functions and their data variable names:
- `skillsResponse` → `skillData`
- `abilityScoresResponse` → `scoreData`
- `alignmentsResponse` → `alignmentData`
- `classesResponse` → `classData`
- `subClassesResponse` → `subClassData`
- `racesResponse` → `raceData`
- `subRacesResponse` → `subRaceData`
- `languagesResponse` → `languageData`
- `conditionsResponse` → `conditionData`
- `selectSpellResponse` → `spellData`
- `selectProficiencyResponse` → `proficiencyData`
- `selectFeatureResponse` → `featureData`
- `selectTrait` → `traitData`
- `selectMagicItemResponse` → `magicItemData`
- `selectEquipmentResponse` → `equipmentData`
- `selectMonster` → `monsterData`

**Files:**
- Modify: `src/lib/info.ts`

**Step 1: Add null guard helper at the top of info.ts (after imports)**

After the last import line (line 39), add:
```typescript
function notFoundResponse(res: Response): ReturnType<Response['send']> {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content: "Could not find that entry. The data may be out of sync." },
  });
}
```

**Step 2: Add null guard to each function immediately after the filter**

For each function listed above, add an early return after the `.filter(...)[0]` line. Example pattern for `skillsResponse`:

```typescript
function skillsResponse(data: DataObject, res: Response) {
  const skillData = skills.filter(
    (skill) => skill.index === data.options[0].value
  )[0];
  if (!skillData) return notFoundResponse(res);
  // ... rest of function unchanged
}
```

Apply the same `if (!<dataVar>) return notFoundResponse(res);` pattern to every function in the list above, immediately after the filter line.

**Step 3: Verify build**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add src/lib/info.ts
git commit -m "fix: add null guards to all info.ts filter lookups to prevent crashes"
```

---

### Task 8: Fix dice — support negative modifiers

**Problem:** `calculateDiceRollResponse` in `src/lib/dice.ts` only handles `+` modifiers. Input like `2d6-2` silently ignores the `-2`, returning an incorrect total.

**Files:**
- Modify: `src/lib/dice.ts`

**Step 1: Rewrite the modifier parsing section**

Replace lines 19-28 (the modifier parsing block):

```typescript
  // get modifiers
  let modifierTotal = 0;
  const inputAfterDice = input.slice(input.indexOf('d') + 1);
  const modifierString = inputAfterDice.replace(/^\d+/, ''); // remove the dice sides number
  if (modifierString.length > 0) {
    const modifierMatches = modifierString.match(/[+-]\d+/g);
    if (modifierMatches) {
      modifierMatches.forEach((mod) => {
        modifierTotal += parseInt(mod, 10);
      });
    }
  }
```

Then update the total calculation to use `modifierTotal` directly. Replace lines 38-47 (the modifier addition block):

```typescript
  // CALCULATE TOTAL
  let total = 0;
  for (var i = 0; i < diceRolls.length; i++) {
    total += diceRolls[i];
  }
  total += modifierTotal;
```

And update `responseInfo` to show the modifier if non-zero. After `responseInfo += `\n\n**TOTAL = ${total}**`;` becomes:
```typescript
  if (modifierTotal !== 0) {
    responseInfo += ` (modifier: ${modifierTotal > 0 ? '+' : ''}${modifierTotal})`;
  }
  responseInfo += `\n\n**TOTAL = ${total}**`;
```

Wait — that last line is the existing line. Put the modifier note on the total line itself:
```typescript
  const modNote = modifierTotal !== 0 ? ` (modifier: ${modifierTotal > 0 ? '+' : ''}${modifierTotal})` : '';
  responseInfo += `\n\n**TOTAL = ${total}**${modNote}`;
```

Also remove the `modifiers` variable declaration on line 20 (`let modifiers: any;`) since it's replaced.

**Step 2: Remove all console.log statements from dice.ts**

Remove lines 8, 11, 18, 27, 35, 48 (all console.log calls in this file):
- `console.log(input, "**** INPUT ****");`
- `console.log(amountOfDice, "Amount of Dice");`
- `console.log(diceSides, "Dice Sides");`
- `console.log(modifiers, "Modifiers");` (now gone with the variable)
- `console.log(diceRolls, "Dice Rolls Array");`
- `console.log(total, "***** TOTAL *****");`

**Step 3: Verify build**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add src/lib/dice.ts
git commit -m "fix: support negative modifiers in dice rolls (e.g. 2d6-2); remove debug logs"
```

---

### Task 9: Fix trailing comma in returnArrayDataAsString

**Problem:** `returnArrayDataAsString` in `src/lib/dataUtils.ts` produces strings like `"Barbarian, Bard, Cleric, "` (trailing `, `). Same issue in `getArmorClassInfo`, `getContentsInfo`, `getAbilityBonuses`, `getMonsterArmorClassInfo`, `getSensesInfo`.

**Files:**
- Modify: `src/lib/dataUtils.ts`

**Step 1: Fix returnArrayDataAsString using Array.join**

Replace the entire `returnArrayDataAsString` function (lines 1-15):
```typescript
export function returnArrayDataAsString(array: any, key: string | null) {
  if (typeof array === "string") return array;
  if (!Array.isArray(array)) return "Unknown";
  if (key) {
    return array.map((item) => item[key]).join(", ");
  } else {
    return array.map((item) => String(item)).join(", ");
  }
}
```

**Step 2: Fix getArmorClassInfo (lines 17-24)**

Replace:
```typescript
export function getArmorClassInfo(equipmentData: any) {
  let string = "";
  for (const [key, value] of Object.entries(equipmentData.armor_class)) {
    string += `${key}: ${value}, `;
  }
  return string;
}
```
With:
```typescript
export function getArmorClassInfo(equipmentData: any) {
  return Object.entries(equipmentData.armor_class)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}
```

**Step 3: Fix getContentsInfo (lines 26-33)**

Replace:
```typescript
export function getContentsInfo(equipmentData: any) {
  let string = "";
  for (const item of equipmentData.contents) {
    string += `${item.item.name}: ${item.quantity}, `;
  }
  return string;
}
```
With:
```typescript
export function getContentsInfo(equipmentData: any) {
  return equipmentData.contents
    .map((item: any) => `${item.item.name}: ${item.quantity}`)
    .join(", ");
}
```

**Step 4: Fix getAbilityBonuses (lines 35-42)**

Replace:
```typescript
export function getAbilityBonuses(raceData: any) {
  let string = "";
  for (const item of raceData.ability_bonuses) {
    string += `${item.ability_score.name}: ${item.bonus}, `;
  }
  return string;
}
```
With:
```typescript
export function getAbilityBonuses(raceData: any) {
  return raceData.ability_bonuses
    .map((item: any) => `${item.ability_score.name}: ${item.bonus}`)
    .join(", ");
}
```

**Step 5: Fix getMonsterArmorClassInfo (lines 54-61)**

Replace:
```typescript
export function getMonsterArmorClassInfo(monsterData: any) {
  let string = "";
  for (const item of monsterData.armor_class) {
    string += `${item.type}: ${item.value}, `;
  }
  return string;
}
```
With:
```typescript
export function getMonsterArmorClassInfo(monsterData: any) {
  return monsterData.armor_class
    .map((item: any) => `${item.type}: ${item.value}`)
    .join(", ");
}
```

**Step 6: Fix getSensesInfo (lines 63-70)**

Replace:
```typescript
export function getSensesInfo(monsterData: any) {
  let string = "";
  for (const [key, value] of Object.entries(monsterData.senses)) {
    string += `${key}: ${value}, `;
  }
  return string;
}
```
With:
```typescript
export function getSensesInfo(monsterData: any) {
  return Object.entries(monsterData.senses)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}
```

**Step 7: Verify build**

```bash
npx tsc --noEmit
```

**Step 8: Commit**

```bash
git add src/lib/dataUtils.ts
git commit -m "fix: remove trailing comma from all array-to-string helpers using join"
```

---

### Task 10: Remove remaining debug console.logs and fix variable shadowing

**Problem:** `console.log(embeds)` on every monster lookup in `info.ts:782`. Variable shadowing: `equipment` callback parameter shadows the imported `equipment` module in `selectEquipmentResponse`.

**Files:**
- Modify: `src/lib/info.ts`

**Step 1: Remove console.log(embeds) at line 782**

Delete:
```typescript
  console.log(embeds)
```

**Step 2: Fix variable shadowing in selectEquipmentResponse (line 650-651)**

Change:
```typescript
  const equipmentData = equipment.filter(
    (equipment) => equipment.index === data.values[0]
  )[0];
```
To:
```typescript
  const equipmentData = equipment.filter(
    (item) => item.index === data.values[0]
  )[0];
```

**Step 3: Verify build**

```bash
npx tsc --noEmit
```

**Step 4: Commit**

```bash
git add src/lib/info.ts
git commit -m "fix: remove debug console.log in selectMonster; fix equipment variable shadowing"
```

---

### Task 11: Add dist/ to .gitignore

**Problem:** Compiled artifacts in `dist/` are tracked in git, including orphaned `character.js` and `fetchWrapper.js` with no source counterparts.

**Files:**
- Modify: `.gitignore`
- Run: git rm to untrack dist/

**Step 1: Add dist/ to .gitignore**

In `.gitignore`, append `dist/` so the file reads:
```
node_modules
.env
dist/
```

**Step 2: Untrack the dist/ directory from git**

```bash
git rm -r --cached dist/
```

Expected output: a list of `rm 'dist/...'` lines for all ~36 compiled files.

**Step 3: Add a build script to package.json**

In `package.json`, add a `"build"` script so the deployment process is explicit. Change the scripts section to:
```json
"scripts": {
  "build": "tsc",
  "start": "node ./dist/server.js",
  "dev": "nodemon ./dist/server.js",
  "safestart": "node --experimental-modules app.mjs"
},
```

**Step 4: Commit**

```bash
git add .gitignore package.json
git commit -m "chore: add dist/ to .gitignore, untrack build artifacts, add build script"
```

---

### Task 12: Fix HTML issues in public/index.html

**Problem 1:** OG image URL on line 19 has a typo: `https://5ebot./com/...` should be `https://5ebot.com/...`

**Problem 2:** Footer text on line 651: "Terms of Servic" should be "Terms of Service"

**Files:**
- Modify: `public/index.html`

**Step 1: Fix OG image URL (line 19)**

Change:
```html
      content="https://5ebot./com/assets/token_dragon_green_og.png"
```
To:
```html
      content="https://5ebot.com/assets/token_dragon_green_og.png"
```

**Step 2: Fix "Terms of Servic" typo (line 651)**

Change:
```html
          <small><a href="tos_privacy.html">Terms of Servic and Privacy Policy</a></small>
```
To:
```html
          <small><a href="tos_privacy.html">Terms of Service and Privacy Policy</a></small>
```

**Step 3: Commit**

```bash
git add public/index.html
git commit -m "fix: correct OG image URL typo and 'Terms of Service' spelling in index.html"
```

---

## Summary

| Task | Files | Issue Fixed |
|------|-------|-------------|
| 1 | routes.ts, controllers.ts | Remove unauthenticated admin endpoint |
| 2 | controllers.ts | Fix createCommands TypeScript type |
| 3 | server.ts | Remove orphaned express.json() middleware |
| 4 | initiative.ts | Guard /in next against empty list crash |
| 5 | initiative.ts | Validate add inputs (length, numeric, max entries) |
| 6 | initiative.ts | Remove reports not-found instead of silent success |
| 7 | info.ts | Null guards on all filter lookups |
| 8 | dice.ts | Support negative modifiers; remove debug logs |
| 9 | dataUtils.ts | Fix trailing comma in all array formatters |
| 10 | info.ts | Remove debug console.log; fix variable shadowing |
| 11 | .gitignore, package.json | Stop tracking dist/ artifacts; add build script |
| 12 | public/index.html | Fix OG URL typo, fix "Terms of Service" typo |
