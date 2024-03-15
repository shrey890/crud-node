import express from 'express'
import cookieParser from 'cookie-parser'
import postRoutes from '../api/routes/posts.js'
import authRoutes from '../api/routes/auth.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from "./db.js"

import usersRoutes from '../api/routes/users.js'
import cors from 'cors'
import { login, register } from './controller/auth.js'
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/posts',postRoutes)
app.use('/auth',authRoutes)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})