import { applicantModel } from "../models/apllicationModel.js";
import { jobModel } from "../models/jobModel.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.user._id;

    const jobId = req.params.jobId;

    if (jobId) {
      return res
        .status(400)
        .json({ message: "Job id not found", success: false });
    }

    const existingApplication = await applicantModel.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({ message: "Already applied for this job", success: false });
    }

    // here we are keeping this controller function as it is- but we can also add, checking of job exists or not... it depends how we handle UI do later will be decided

    const newApplication = new applicantModel({
      applicant: userId,
      job: jobId,
    });
    await newApplication.save();

    jobModel.applicantions.push(newApplication._id);
    await jobModel.save();

    return res
      .status(201)
      .json({ message: "Applied successfully", success: true });
  } catch (error) {
    console.log("Error while applying for job", error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.user._id;
    const applications = await applicantModel
      .find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: { path: "company", options: { sort: { createdAt: -1 } } },
      });

    if (!applications) {
      return res
        .status(400)
        .json({ message: "No applications found", success: false });
    }

    return res
      .status(200)
      .json({ message: "Applications fetched successfully", applications });
  } catch (error) {
    console.log("Error while getting applications", error);
  }
};

export const getJobApplications = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const applications = await applicantModel
      .findById({ job: jobId })
      .populate({
        path: "applicant",
        options: { sort: { createdAt: -1 } },
      });
    if (!job) {
      return res
        .status(400)
        .json({ message: "No applications found", success: false });
    }

    return res
      .status(200)
      .json({ message: "Applications fetched successfully", applications });
  } catch (error) {
    console.log("Error while getting applications", error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicantionId = req.params.applicantId;
    if (!status) {
      return res
        .status(400)
        .json({ message: "Status is required", success: false });
    }
    const application = await applicantModel.findById(applicantionId);
    if (!application) {
      return res
        .status(400)
        .json({ message: "Application not found", success: false });
    }

    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "Application status updated successfully",
      success: true,
    })
  } catch (error) {
    console.log("Error while getting applications", error);
  }
};
