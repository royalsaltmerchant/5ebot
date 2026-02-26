# Dice + AI Query Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** (1) Add advantage/disadvantage and labeled rolls to `/roll`. (2) Add a `/query` slash command that calls the farreachco.com SRD search API and returns AI answers in Discord.

**Architecture:**
- Dice: pure logic change in `src/lib/dice.ts`. Input format: `<NdS>[+/-mod] [adv|dis] [label]`. No slash command re-registration needed.
- Query: new `src/lib/query.ts` handles the farreachco API call + response formatting. `interactionController.ts` returns a deferred response (type 5) immediately, then async-patches the reply via Discord's REST API. New slash command registered via a one-time script.

**Tech Stack:** TypeScript, Express, node-fetch (already installed), Discord Interactions API.

---

## Build command

```bash
cd /Users/julianranieri/Desktop/Code_Base/5e-discord-bot
npx tsc --noEmit
```

Expected: only the pre-existing TS7030 error in `interactionController.ts`.

---

### Task 1: Update dice.ts — advantage/disadvantage + labels

**Files:**
- Modify: `src/lib/dice.ts`

**Step 1: Read the current file**

Read `src/lib/dice.ts`.

**Step 2: Replace calculateDiceRollResponse with this implementation**

Replace the entire `calculateDiceRollResponse` function with:

```typescript
function calculateDiceRollResponse(data: DataObject) {
  const raw = data.options[0].value.trim();

  // Detect advantage/disadvantage (case-insensitive)
  const lowerRaw = raw.toLowerCase();
  let mode: 'normal' | 'adv' | 'dis' = 'normal';
  let stripped = raw;
  if (/\b(adv(antage)?)\b/i.test(stripped)) {
    mode = 'adv';
    stripped = stripped.replace(/\b(adv(antage)?)\b/gi, '').trim();
  } else if (/\b(dis(advantage)?)\b/i.test(stripped)) {
    mode = 'dis';
    stripped = stripped.replace(/\b(dis(advantage)?)\b/gi, '').trim();
  }

  // Extract dice expression (NdS with optional modifiers)
  const diceMatch = stripped.match(/^(\d+)\s*d\s*(\d+)((?:\s*[+-]\s*\d+)*)(.*)?$/i);
  if (!diceMatch) {
    return `Invalid input: "${raw}". Try: 2d6+3, 1d20 adv attack`;
  }

  const amount = parseInt(diceMatch[1], 10);
  const sides = parseInt(diceMatch[2], 10);
  const modString = (diceMatch[3] || '').trim();
  const label = (diceMatch[4] || '').trim().replace(/^[,\s]+/, '');

  if (amount < 1 || amount > 100) return 'Number of dice must be between 1 and 100.';
  if (sides < 2 || sides > 1000) return 'Dice sides must be between 2 and 1000.';

  // Parse modifiers
  let modifierTotal = 0;
  const modMatches = modString.match(/[+-]\s*\d+/g) || [];
  modMatches.forEach((m) => {
    modifierTotal += parseInt(m.replace(/\s/g, ''), 10);
  });

  // Roll dice
  function rollDie(): number {
    return Math.floor(Math.random() * sides) + 1;
  }

  let rolls: number[];
  let keptRoll: number | null = null;
  let droppedRoll: number | null = null;

  if (mode !== 'normal') {
    // Advantage/disadvantage: roll 2d20 (or NdS but keep 1 die)
    const roll1 = rollDie();
    const roll2 = rollDie();
    if (mode === 'adv') {
      keptRoll = Math.max(roll1, roll2);
      droppedRoll = Math.min(roll1, roll2);
    } else {
      keptRoll = Math.min(roll1, roll2);
      droppedRoll = Math.max(roll1, roll2);
    }
    rolls = [keptRoll];
  } else {
    rolls = [];
    for (let i = 0; i < amount; i++) {
      rolls.push(rollDie());
    }
  }

  const rollSum = rolls.reduce((a, b) => a + b, 0);
  const total = rollSum + modifierTotal;

  // Format output
  const modeLabel = mode === 'adv' ? ' (Advantage)' : mode === 'dis' ? ' (Disadvantage)' : '';
  const titleLine = label
    ? `🎲 **${label}**${modeLabel}`
    : `🎲 **Roll**${modeLabel}`;

  let lines = titleLine + '\n';

  if (mode !== 'normal') {
    lines += `Roll 1: ${keptRoll} ✓\n`;
    lines += `Roll 2: ${droppedRoll} ✗ (dropped)\n`;
  } else {
    rolls.forEach((r, i) => {
      const crit = r === sides ? ' — **CRITICAL**' : '';
      lines += `Roll ${i + 1}: ${r}${crit}\n`;
    });
  }

  if (modifierTotal !== 0) {
    lines += `Modifier: ${modifierTotal > 0 ? '+' : ''}${modifierTotal}\n`;
  }
  lines += `**TOTAL = ${total}**`;

  return lines;
}
```

**Step 3: Verify build**

```bash
npx tsc --noEmit
```

**Step 4: Done (no commit — user will review and commit manually)**

Report what changed.

---

### Task 2: Create src/lib/query.ts

**Files:**
- Create: `src/lib/query.ts`

**Step 1: Create the file**

```typescript
import fetch from 'node-fetch';
import { DiscordRequest } from '../api/discordUtils.js';
import { InteractionResponseType } from 'discord-interactions';

const FARREACH_SEARCH_URL = 'https://farreachco.com/dnd/5e/srd/search';
const MAX_DISCORD_LENGTH = 1800;
const MORE_LINK = '\n\n— [Full answer at farreachco.com](https://farreachco.com/dnd/5e/srd/contents)';

function truncateForDiscord(text: string): string {
  if (text.length <= MAX_DISCORD_LENGTH) return text;
  return text.slice(0, MAX_DISCORD_LENGTH) + MORE_LINK;
}

export async function handleQueryResponse(
  question: string,
  short: boolean,
  appId: string,
  interactionToken: string,
): Promise<void> {
  let answer: string;

  try {
    const res = await fetch(FARREACH_SEARCH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: question, short }),
    });

    if (!res.ok) {
      answer = 'The SRD search service is currently unavailable. Try again later.';
    } else {
      const data = await res.json() as { answer?: string };
      answer = data.answer || 'No answer was returned.';
    }
  } catch {
    answer = 'Failed to reach the SRD search service. Try again later.';
  }

  const content = truncateForDiscord(answer);

  // Patch the deferred reply
  await DiscordRequest(`webhooks/${appId}/${interactionToken}/messages/@original`, {
    method: 'PATCH',
    body: { content },
  });
}
```

**Step 2: Verify build**

```bash
npx tsc --noEmit
```

**Step 3: Report what was created.**

---

### Task 3: Add /query to getSlashCommandBody.ts

**Files:**
- Modify: `src/api/getSlashCommandBody.ts`

**Step 1: Read the file**

Read `src/api/getSlashCommandBody.ts`.

**Step 2: Add the query case before `default:`**

Find the `default:` at the bottom of the switch and add before it:

```typescript
    case "query":
      return {
        name: "query",
        description: "Ask a D&D 5e rules question powered by AI",
        type: 1,
        options: [
          {
            name: "question",
            description: "Your D&D 5e rules question",
            type: 3,
            required: true,
          },
          {
            name: "brief",
            description: "Get a shorter, Discord-optimized answer (2-3 sentences)",
            type: 5, // BOOLEAN
            required: false,
          },
        ],
      };
```

**Step 3: Verify build**

```bash
npx tsc --noEmit
```

**Step 4: Report what changed.**

---

### Task 4: Handle /query in interactionController.ts

**Files:**
- Modify: `src/api/interactionController.ts`

**Step 1: Read the file**

Read `src/api/interactionController.ts`.

**Step 2: Add query import at top**

After the existing imports, add:
```typescript
import { handleQueryResponse } from '../lib/query.js';
```

**Step 3: Add the query case in the APPLICATION_COMMAND switch**

Find the `case "monsters":` block and add after it (before the closing `}` of the switch):

```typescript
        case "query": {
          const question: string = data.options[0].value;
          const briefOption = data.options.find((o: any) => o.name === 'brief');
          const short: boolean = briefOption?.value === true;
          const appId = process.env.APP_ID as string;
          const token: string = req.body.token;

          // Fire the API call in the background; don't await
          handleQueryResponse(question, short, appId, token).catch(() => {
            // Background failure is non-fatal; Discord will show a "interaction failed" if patch never arrives
          });

          // Immediately return deferred response
          return res.send({
            type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
          });
        }
```

Note: `InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE` has value `5`. Verify this constant exists in the `discord-interactions` package version in use. If not, use the literal `5`.

**Step 4: Verify build**

```bash
npx tsc --noEmit
```

**Step 5: Report what changed.**

---

### Task 5: Register the /query command with Discord

The `/query` command must be registered with Discord's API once. Add it to the `createCommands` list in `controllers.ts` and note this is a one-time operation.

**Files:**
- Modify: `src/api/controllers.ts`

**Step 1: Read controllers.ts**

Read `src/api/controllers.ts`.

**Step 2: Add "query" to the slashCommandsList**

Find:
```typescript
  const slashCommandsList = [
    // ...
    "initiative",
    // "roll"
  ]
```

Change to:
```typescript
  const slashCommandsList = [
    // ...
    "initiative",
    // "roll",
    "query",
  ]
```

**Step 3: Temporarily re-enable the /create_command route in routes.ts**

In `src/api/routes.ts`, the `createCommands` route is commented out. To register, temporarily uncomment:
```typescript
// router.get('/create_command', createCommands)
```
→ becomes →
```typescript
router.get('/create_command', createCommands)
```

And add the createCommands import back:
```typescript
import {
  // deleteCommand,
  createCommands,
} from './controllers.js'
```

**Step 4: Note for after registration**

After running the server and hitting `GET /create_command` once, re-comment the route and remove the import to keep the endpoint closed.

**Step 5: Verify build**

```bash
npx tsc --noEmit
```

**Step 6: Report what changed.**
