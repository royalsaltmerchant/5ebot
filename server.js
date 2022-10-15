import 'dotenv/config'
import express from 'express'
import { VerifyDiscordRequest } from './api/discordUtils.js'
import routes from './api/routes.js'

// Create and configure express app
const app = express();
// verify discord
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// add routes
app.use('/', routes)

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
