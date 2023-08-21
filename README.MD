# 5e-Bot
This is a discord bot which allows slash commands for searching through the D&D 5e SRD to fetch information on specific resources. It also has a dice rolling feature. 

The data is sourced from this resource: https://github.com/5e-bits/5e-database/ and stored locally in the data folder. Special thanks to the folks at https://www.dnd5eapi.co/ for inspiring this project and making it possible.

## Dev
The service is using express.js written in Typescript utilizing a light-weight discord wrapper lib: "discord-interactions" (https://github.com/discord/discord-interactions-js). 

Don't for get to `npm install`

There are two commands to run the service:

`sh ./commands/start_dev.sh` For Development.

`sh ./commands/start_prod.sh` For Production.