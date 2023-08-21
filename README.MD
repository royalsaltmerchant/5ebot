# 5e-Bot
This is a discord bot which allows slash commands for searching through the D&D 5e SRD to fetch information on specific resources. It also has a dice rolling feature. 

The data is sourced from this API: https://www.dnd5eapi.co/ and keeps some of the reference data locally in the data folder. Future improvements could be to gain more independence from the API in order to improve performance. 

The resouce access is not exhausted but provides the essential in-game resources such as: Spells, Equipment, Feats etc.

## Dev
The service is using express.js written in Typescript utilizing a light-weight discord wrapper lib: "discord-interactions" (https://github.com/discord/discord-interactions-js). 

There are two commands to run the service:

`sh ./commands/start_dev.sh` For Development.

`sh ./commands/start_prod.sh` For Production.

## Docs
In progress...