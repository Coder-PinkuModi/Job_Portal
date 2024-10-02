import { applyJob, getAppliedJobs, getJobApplications, updateStatus } from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/authenticationMiddlewares.js"
import express from "express";

const Router= express.Router()

Router.route("/applyJob/:jobId").post(isAuthenticated, applyJob);
Router.route("/getAppliedJobs").get(isAuthenticated, getAppliedJobs);
Router.route("/getJobApplications/:jobId").get(isAuthenticated, getJobApplications);
Router.route("/updateStatus/:applicantId").put(isAuthenticated, updateStatus);

export default Router