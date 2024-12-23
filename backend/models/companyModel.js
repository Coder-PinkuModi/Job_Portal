import mongoose from "mongoose";

const companySchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    website:{
        type: String,
    },
    location: {
        type: String,
        required: true
    },
    logo:{
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: "User",
        required: true
    }
},{timestamps: true})

export const companyModel= mongoose.model("Company", companySchema)
