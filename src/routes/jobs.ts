import express from "express";
import validateBody from "../middleware/joi-validation";
import {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
} from "../controllers/jobs";
import {
  validateCreateJobData,
  validateUpdateJobData,
} from "../utils/jobsValidation";

const router = express.Router();

router
  .route("/")
  .get(getAllJobs)
  .post(validateBody(validateCreateJobData), createJob);
router
  .route("/:jobId")
  .get(getJob)
  .patch(validateBody(validateUpdateJobData), updateJob)
  .delete(deleteJob);

export default router;
