import express from 'express'
import { deleteTask } from '../controller/deleteTask.js'
const router = express.Router()
router.delete('/delete/:id',deleteTask)
export default router