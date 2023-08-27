import express from "express";

import {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
  showStats,
} from "../controllers/jobs";
import {
  validateCreateJobData,
  validateUpdateJobData,
} from "../utils/jobsValidation";
import { validateBody, validateFilters } from "../middleware/joi-validation";
import { testUser } from "../middleware/testUser";

const router = express.Router();

router
  .route("/")
  .get(validateFilters, getAllJobs)
  .post(testUser, validateBody(validateCreateJobData), createJob);
router.route("/stats").get(showStats);
router
  .route("/:jobId")
  .get(getJob)
  .patch(testUser, validateBody(validateUpdateJobData), updateJob)
  .delete(testUser, deleteJob);

export default router;
