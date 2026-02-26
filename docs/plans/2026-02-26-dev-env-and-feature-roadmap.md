# Dev Environment Audit + Feature Roadmap (2026-02-26)

## Current audit summary

1. Build health: `npm run build` failed on `TS7030` in `interactionController.ts` due to missing return path.
2. Dev workflow friction: no `typecheck` script and no nodemon config; dev flow depended on shell scripts only.
3. Environment bootstrapping: project had no `.env.example` template for required runtime variables.
4. Runtime resilience: Redis connection errors were only emitted via event listener and not handled on initial connect promise.
5. Configuration flexibility: port was hardcoded (`3000`) instead of honoring `PORT`.

## Changes implemented in this pass

1. Added npm scripts: `clean`, `typecheck`, `build:watch`, `dev:all`.
2. Added `nodemon.json` to standardize local restart behavior.
3. Added `.env.example` with required keys: `DISCORD_TOKEN`, `PUBLIC_KEY`, `APP_ID`, `PORT`.
4. Updated `commands/start_dev.sh` to use `npm run build:watch`.
5. Updated `src/server.ts`:
   - supports `PORT`
   - catches `redisClient.connect()` failures explicitly
6. Updated `src/api/interactionController.ts`:
   - added fallback response for unknown slash command
   - added final fallback response for unsupported interaction type
7. Updated `README.MD` with streamlined setup and dev commands.

## Feature roadmap (prioritized)

### P1: Reliability and observability

Status: Partially implemented on 2026-02-26.

Done:

1. Request logging middleware with structured JSON logs.
2. Structured error logging in interaction and Redis paths.
3. Health endpoints:
   - `GET /healthz` (process up)
   - `GET /readyz` (Redis + required env validation)
4. Startup env validation for required keys (`DISCORD_TOKEN`, `PUBLIC_KEY`, `APP_ID`).
5. Basic per-guild/user interaction rate limiting.

Remaining:

1. Add interaction id/request id correlation to all logs.
2. Export metrics (request count, error count, limiter drops).
3. Replace in-memory limiter with Redis-backed limiter for multi-instance deployments.

### P2: Discord UX improvements

1. Autocomplete for all searchable slash command options (spells, monsters, equipment, etc.).
2. Pagination support for long data responses using message components.
3. Consistent embed formatting for every command response.

### P3: Initiative system upgrades

1. Round counter, active combatant highlighting, and `previous` turn support.
2. Tie-break handling and optional Dex modifier-based sorting.
3. Per-channel initiative state isolation (currently guild-level only).

### P4: AI query quality + controls

1. Add source snippets/links in query responses.
2. Add per-guild query rate limiting + cooldown messaging.
3. Add prompt guardrails for non-5e requests and citation style consistency.

### P5: Data and performance

1. Precompute in-memory indexes for all data domains to speed query lookup.
2. Add response caching for expensive query/data lookups.
3. Add stale data detection and dataset refresh workflow.
