import express from "express";
import validateBody from "../middleware/joi-validation";
import {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
} from "../controllers/jobs";

const router = express.Router();

router.route("/").get(getAllJobs).post(validateBody, createJob);
router.route("/:jobId").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
