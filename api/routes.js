import express from "express"
import {
  getSlashCommands,
  deleteSlashCommand,
  createSlashCommands
} from './controllers.js'
import interactionsController from "./interactionController.js"

var router = express.Router()

router.get('/', function (req, res) {
  return res.send({message: 'healthy'})
})

router.get('/get', getSlashCommands)

router.get('/create', createSlashCommands)

router.get('/delete/:id', deleteSlashCommand)

router.post('/interactions', interactionsController)

export default router