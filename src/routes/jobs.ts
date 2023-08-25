import express from "express";

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
import { validateBody, validateQuery } from "../middleware/joi-validation";

const router = express.Router();

router
  .route("/")
  .get(validateQuery, getAllJobs)
  .post(validateBody(validateCreateJobData), createJob);
router
  .route("/:jobId")
  .get(getJob)
  .patch(validateBody(validateUpdateJobData), updateJob)
  .delete(deleteJob);

export default router;
