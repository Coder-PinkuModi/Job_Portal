import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dbConnect=async ()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.log("Error ", err))
}

export default dbConnect