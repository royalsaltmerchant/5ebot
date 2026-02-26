# 5e-Bot
This is a discord bot which allows slash commands for searching through the D&D 5e SRD to fetch information on specific resources. It also has a command for dice rolling and an initiative tracking system.

The data is sourced from this resource: https://github.com/5e-bits/5e-database/ and stored locally in the data folder. Special thanks to the folks at https://www.dnd5eapi.co/ for inspiring this project and making it possible.

## Dev
The service is using express.js written in Typescript utilizing a light-weight discord wrapper lib: "discord-interactions" (https://github.com/discord/discord-interactions-js). 

Run initial setup:

`cp .env.example .env`

`npm install`

`npm run build`

`npm run start`

Useful development commands:

`npm run typecheck` Type-check only

`npm run build` Compile to `dist/`

`npm run dev:all` Run TypeScript watch + nodemon

`npm run dev` Run nodemon against built output (`dist/`)

Runtime endpoints:

`GET /healthz` Liveness check

`GET /readyz` Readiness check (env + Redis)

## Deploy / Ops

Use `docs/ops/deploy.md` for deployment and remote service control.

Common commands:

`npm run ops:preflight`

`npm run ops:deploy`

`npm run ops:migrate-systemd`
