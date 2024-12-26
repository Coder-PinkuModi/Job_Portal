import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
      enum: ["hybrid", "remote"],
    },
    qualification: {
      type: String,
      required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    experienceLevel:{
      type:String,
      required: true
    },
    location: {
      type: String,
      required: true,
    },
    skills: [{
      type: String,
      required: true,
    }],
    position:{
        type: Number,
        required: true,
    },
    company:{
        type: String,
        required: true
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Application"
    }],
  },
  { timestamps: true }
);


export const jobModel= mongoose.model("Job", jobSchema)