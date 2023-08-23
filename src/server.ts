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

// It's best to set up body-parser so that it does NOT apply to interaction
// routes.
app.use(express.json());

// Setup redis
export const redisClient = createClient();
redisClient.on('error', err => console.log('Redis Client Error', err));


app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000');
});
