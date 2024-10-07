import express from "express"
import { getJobsInterest, jobInterestSetup  } from "../controllers/JobsInterest.js"
import { isAuthenticated } from "../middlewares/authenticationMiddlewares.js"

const router = express.Router()

router.post("/interestJobsSetup",isAuthenticated,jobInterestSetup)
router.get("/interestJobsget",isAuthenticated,getJobsInterest)

export default router