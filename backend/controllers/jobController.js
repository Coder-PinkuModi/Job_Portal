import { jobModel } from "../models/jobModel.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      jobType,
      salary,
      location,
      skills,
      position,
      company,
      experience,
      companyId,
    } = req.body;

    if (
      !title ||
      !description ||
      !jobType ||
      !salary ||
      !location ||
      !skills ||
      !position ||
      !company ||
      !experience ||
      !companyId
    )
      return res.status(400).json({
        message: "All inputs required for posting job",
        success: false,
      });

    const userId = req.user._id;

    const job = await jobModel.create({
      title,
      description,
      salary: Number(salary),
      jobType,
      location,
      skills: skills.split(","),
      position,
      company,
      experienceLevel: experience,
      company: companyId,
      createdBy: userId,
    });

    return res.status(200).json({
      message: "Job posted successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log("Error while posting job", error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const jobs = await jobModel.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { skills: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });

    if (!jobs) {
      return res.status(400).json({
        message: "No jobs found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Jobs fetched successfully",
      jobs,
      success: true,
    });
  } catch (error) {
    console.log("Error while getting all jobs", error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;

    const job = await jobModel.findById(jobId);

    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Job fetched successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log("Error while getting job by id", error);
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.user._id;
    const jobs = await jobModel.find({ createdBy: adminId });

    if (!jobs) {
      return res.status(400).json({
        message: "No jobs found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Jobs fetched successfully",
      success: true,
      jobs,
    });
  } catch (error) {
    console.log("Error while getting admin jobs", error);
  }
};
