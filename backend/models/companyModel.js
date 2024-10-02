import mongoose from "mongoose";

const companySchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website:{
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    logo:{
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: "User",
        required: true
    }
},{timestamps: true})

export const companyModel= mongoose.model("Company", companySchema)
