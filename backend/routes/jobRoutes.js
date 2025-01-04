import express from "express";
import { isAuthenticated } from "../middlewares/authenticationMiddlewares.js";
import {
  postJob,
  getJobById,
  jobsForUserInitial,
  getAllJobs,
  getAdminJobs,
  jobDeletebyAdmin,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/postJob").post(isAuthenticated, postJob);
router.route("/getJobById/:jobId").get(isAuthenticated,getJobById);
router.route("/getIntitalJobs").get(isAuthenticated,jobsForUserInitial)
router.route("/getAllJobs").get(getAllJobs);
router.route("/delete/:jobId").delete(isAuthenticated,jobDeletebyAdmin);
router.route("/getAdminJobs").get(isAuthenticated, getAdminJobs);

export default router;