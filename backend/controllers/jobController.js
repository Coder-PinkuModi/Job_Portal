import { jobModel } from "../models/jobModel.js";
import { userModel } from "../models/userModel.js";
import { companyModel } from "../models/companyModel.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      jobType,
      qualification,
      salary,
      location,
      skills,
      position,
      company,
      experienceLevel,
      companyId,
    } = req.body;

    if (
      !title ||
      !description ||
      !jobType ||
      !qualification ||
      !salary ||
      !location ||
      !skills ||
      !position ||
      !company ||
      !experienceLevel ||
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
      qualification,
      salary,
      jobType,
      location,
      skills: skills.slice(","),
      position,
      company,
      experienceLevel,
      company,
      companyId: companyId,
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
    const userId = req.user._id;

    const job = await jobModel.findById(jobId);

    if (!job) {
      return res.status(400).json({
        message: "Job not found",
        success: false,
      });
    }

    const user = await userModel.findById(userId);
    if (user?.role === "recruiter" && job?.createdBy !== userId) {
      const company = await companyModel.findById(job.companyId);

      return res.status(200).json({
        message: "Job fetched successfully",
        job,
        companyLogo: company?.logo,
        success: true,
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

export const jobDeletebyAdmin = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const userId = req.user._id;

    const job = await jobModel.findById(jobId);
    // console.log("job",job);
    if (job.createdBy.toString() !== userId.toString()) {
      return res.status(400).json({
        message: "You are not authorized to delete this job",
        success: false,
      });
    }

    // deleting of the job
    await jobModel.findByIdAndDelete(jobId);
    return res.status(204).json({
      message: "Job deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("error console while deleting the job", error);
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
