import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  phoneNumberVerified: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "recruiter"],
    required: true,
  },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String },
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    profilePhoto: { type: String },
  },
  emailOtp: String,
  phoneOtp: String,
  emailOtpExpiry: Date,
  phoneOtpExpiry: Date,
  lastLogin: Date
},{timestamps: true});


export const userModel = mongoose.model("User", userSchema)