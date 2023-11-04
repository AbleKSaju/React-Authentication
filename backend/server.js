import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'
import cors from 'cors'
dotenv.config()
import { errorHandler,notFound } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 8000;
connectDB()
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',userRouter)
app.get('/',(req,res)=>res.send('Server is Ready'))
app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>console.log(`Server started on port ${port} `))