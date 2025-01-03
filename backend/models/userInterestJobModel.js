import mongoose from "mongoose";

const userInterestJobSchema = new mongoose.Schema({
    jobsInterested:[{
        type: String,
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
},{timestamps: true});

export const userInterestJobModel= mongoose.model("UserInterestJob", userInterestJobSchema)