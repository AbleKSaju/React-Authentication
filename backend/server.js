import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRouter.js'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()
import { errorHandler,notFound } from './controllers/middleware/errorMiddleware.js'
import connectDB from './config/db.js'
const port = process.env.PORT || 8000;
connectDB()
const app=express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/users',userRouter)
app.get('/',(req,res)=>res.send('Server is Ready'))
app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>console.log(`Server started on port ${port} `))