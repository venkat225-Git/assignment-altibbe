import express from 'express'
import dotenv from "dotenv"
import connectdb from './db.js'
import productRoute from './routes/productRoutes.js'
import cors from "cors"
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

connectdb()

app.use('/api',productRoute)
app.use("/api/ai", aiRoutes);

const PORT =process.env.PORT || 5000 



app.listen(PORT,()=>{
    console.log("server is running")
}
)