import express from "express"
import { verifyKeyMiddleware } from 'discord-interactions'
import {
  getCommands,
  // deleteCommand,
  // createCommands
} from './controllers.js'
import interactionsController from "./interactionController.js"

var router = express.Router()

router.get('/', function (_req, res) {
  return res.send({message: 'healthy'})
})

router.get('/get_all_commands', getCommands)

// router.get('/create_command', verifyKeyMiddleware(process.env.PUBLIC_KEY), createCommands)

// router.get('/delete_command/:id', verifyKeyMiddleware(process.env.PUBLIC_KEY), deleteCommand)

router.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY as string), interactionsController)

export default router