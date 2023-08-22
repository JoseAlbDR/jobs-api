import express from "express";
import {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
} from "../controllers/jobs";

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:jobID").post(getJob).patch(updateJob).delete(deleteJob);

export default router;
