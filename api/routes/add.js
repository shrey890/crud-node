import express from 'express'
import { addTask } from '../controller/addTask.js'
const router = express.Router()

router.post('/addtask',addTask)

export default router