import express from 'express'
import { getTasks } from '../controller/getTask.js'
const router = express.Router()

router.get('/gettask',getTasks)

export default router