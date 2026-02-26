import express from "express"
import { verifyKeyMiddleware } from 'discord-interactions'
import interactionsController from "./interactionController.js"
import { createCommands } from './controllers.js'

var router = express.Router()

router.get('/', function (_req, res) {
  return res.sendFile("../public/index.html")
})
router.get('/index', function (_req, res) {
  return res.sendFile("../public/index.html")
})

router.get('/create_command', createCommands)

// router.get('/delete_command/:id', deleteCommand)

router.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY as string), interactionsController)

export default router