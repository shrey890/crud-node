import express from 'express'
import { updateTask } from '../controller/updateTask.js'
const router = express.Router()
router.put('/update/:id',updateTask)
export default router