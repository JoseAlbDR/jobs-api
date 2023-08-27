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
import { testUser } from "../middleware/testUser";

const router = express.Router();

router
  .route("/")
  .get(validateQuery, getAllJobs)
  .post(testUser, validateBody(validateCreateJobData), createJob);
router
  .route("/:jobId")
  .get(getJob)
  .patch(testUser, validateBody(validateUpdateJobData), updateJob)
  .delete(testUser, deleteJob);

export default router;
