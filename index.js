import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import gettingData from './controllers/index.controller.js'
import connectDB from './configs/database.js'
dotenv.config()

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
app.use(bodyParser.json())

app.get('/',gettingData)

const startServer=async()=>{
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is listening on the port ${PORT}`)
        })

    } catch (error) {
        console.log("error in connection ",error)
    }
}
startServer()