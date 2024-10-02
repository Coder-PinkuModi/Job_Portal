import mongoose from "mongoose";

const apllicationSchema = new mongoose.Schema({
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },
    applicant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },
},{timestamps: true});

export const applicantModel= mongoose.model("Applicant", apllicationSchema)