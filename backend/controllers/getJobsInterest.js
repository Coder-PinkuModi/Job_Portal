// import mongoose from "mongoose";
import { userInterestJobModel } from "../models/userInterestJobModel.js";

const defaultInterest = ["Web Developer", "App Developer", "Sales Executive", "Accountant"];

const getJobsInterest = async (req, res) => {
    try {
        const { userId } = req.user; // Extracting the userId from the request

        // Fetching the user's interests from the userInterestJobModel
        const getAllInterest = await userInterestJobModel.findOne({ user: userId });

        // If no interests are found, respond with default interests
        if (!getAllInterest) {
            return res.status(200).json({
                message: "No interest found, here are default interests",
                gdefaultInterest: defaultInterest
            });
        }

        // Responding with found interests
        return res.status(200).json({
            message: "Interest found",
            getAllInterest: getAllInterest.interests // Assuming the interests are stored in an "interests" field
        });
    } catch (error) {
        // Handling any errors that occur
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }
};

export { getJobsInterest };
