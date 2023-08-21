import { config } from 'dotenv';
import { resolve } from 'path';
// configure .env
config({ path: resolve(__dirname, '../.env') });
import express from 'express'
import routes from './api/routes.js'

// Create and configure express app
const app = express();

// add routes
app.use('/', routes)

// It's best to set up body-parser so that it does NOT apply to interaction
// routes.
app.use(express.json());


app.listen(3000, () => {
  console.log('Listening on port http://localhost:3000');
});
