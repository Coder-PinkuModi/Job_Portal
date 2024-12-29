import express from "express";
import { isAuthenticated } from "../middlewares/authenticationMiddlewares.js";
import {
  postJob,
  getJobById,
  getAllJobs,
  getAdminJobs,
  jobDeletebyAdmin,
} from "../controllers/jobController.js";

const router = express.Router();

router.route("/postJob").post(isAuthenticated, postJob);
router.route("/getJobById/:jobId").get(isAuthenticated,getJobById);
router.route("/delete/:jobId").get(isAuthenticated,jobDeletebyAdmin);
router.route("/getAllJobs").get(getAllJobs);
router.route("/getAdminJobs").get(isAuthenticated, getAdminJobs);

export default router;
