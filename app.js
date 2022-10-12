import 'dotenv/config';
import express from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { VerifyDiscordRequest, DiscordRequest } from './utils.js';
import fetch from 'node-fetch';

// Create and configure express app
const app = express();
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.get('/', function (req, res) {
  return res.send({message: 'okay'})
})


app.get('/delete/:id', async function (req, res) {
  const appId = process.env.APP_ID;
  const globalEndpoint = `applications/${appId}/commands/${req.params.id}`;

  try {
    // Send HTTP request with bot token
    const res = await DiscordRequest(globalEndpoint, {
      method: 'DELETE',
    });

    console.log(await res.json());
  } catch (err) {
    console.error('Error installing commands: ', err);
  }
  return res.send({message: 'deleted'})
})

app.get('/create', async function (req, res) {
  createCommand()
  return res.send({message: 'created'})
})

app.get('/get', async function (req, res) {
  const appId = process.env.APP_ID;
  const globalEndpoint = `applications/${appId}/commands`;

  try {
    // Send HTTP request with bot token
    const discordRes = await DiscordRequest(globalEndpoint, {
      method: 'GET',
    });
    const result = await discordRes.json()
    console.log(result);
    return res.send(result)
  } catch (err) {
    console.error('Error installing commands: ', err);
  }
})

app.post('/interactions', async function (req, res) {
  // Interaction type and data
  const { type, data } = req.body;

  // handle verification
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    console.log('***********************************************')
    console.log(data)
    // Slash command with name of "test"
    if (data.name === 'info') {
      if(data.options[0].name === 'skills') {
        const dndRes = await fetch(`https://www.dnd5eapi.co/api/skills/${data.options[0].value}`)
        const result = await dndRes.json()
        const returnInfo = `${result.name}\n\n${result.desc}\n\nAbility Score: ${result.ability_score.name}`
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: returnInfo,
          },
        });
      }
    }
  }
});

async function createCommand() {
  const appId = process.env.APP_ID;
  const globalEndpoint = `applications/${appId}/commands`;

  // get dnd skills
  const dndRes = await fetch('https://www.dnd5eapi.co/api/skills')
  const result = await dndRes.json()
  const dndArrayData = []
  result.results.forEach(item => {
    const itemObject = {
      name: item.name,
      value: item.index
    }
    dndArrayData.push(itemObject)
  })

  const commandBody = {
    name: "info",
    type: 1,
    description: "Get 5e info",
    options: [
      {
        name: "skills",
        description: "5e skills list",
        type: 3,
        required: true,
        choices: dndArrayData
      }
    ]
  };

  try {
    // Send HTTP request with bot token
    const res = await DiscordRequest(globalEndpoint, {
      method: 'POST',
      body: commandBody,
    });

    console.log(await res.json());
  } catch (err) {
    console.error('Error installing commands: ', err);
  }
}

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
