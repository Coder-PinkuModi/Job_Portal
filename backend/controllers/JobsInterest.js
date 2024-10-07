// import mongoose from "mongoose";
import { userInterestJobModel } from "../models/userInterestJobModel.js";

const defaultInterest = ["Web Developer", "App Developer", "Sales Executive", "Accountant"];

const getJobsInterest = async (req, res) => {
    try {
        const { userId } = req.user;

        const getAllInterest = await userInterestJobModel.findOne({ user: userId });

        if (!getAllInterest) {
            return res.status(200).json({
                message: "No interest found, here are default interests",
                gdefaultInterest: defaultInterest
            });
        }

        return res.status(200).json({
            message: "Interest found",
            getAllInterest: getAllInterest.interests
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
};

const jobInterestSetup = async (req, res) => {
    try {
        const { jobsInterest } = req.body;

        if (!Array.isArray(jobsInterest) || jobsInterest.length === 0) {
            return res.status(400).json({
                message: "No valid job interests found",
                success: false
            });
        }

        const user = req.user; 

        if (!user) {
            return res.status(404).json({
                message: "User not authenticated",
                success: false
            });
        }

        const userInterestJob = new userInterestJobModel({
            user: user._id, 
            jobsInterested: jobsInterest
        });
        
        await userInterestJob.save();

        return res.status(201).json({
            message: "User interest saved successfully",
            success: true
        });

    } catch (error) {
        console.log("Error while setting job interest", error);
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
};

export { getJobsInterest, jobInterestSetup };
