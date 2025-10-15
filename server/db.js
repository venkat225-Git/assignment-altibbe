import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const connectdb = async ()=> {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db is connected successfully")
    } catch (error) {
        console.log("Mongo db is not connected successfully")
    }
        
    
}

export default connectdb