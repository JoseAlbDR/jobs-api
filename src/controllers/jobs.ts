import { Response, Request } from "express";
import { CustomRequest } from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
// import { BadRequestError, NotFoundError } from "../errors";
import { Job } from "../Models/Job";
import { isCreateJobRequest } from "../utils/typeGuard";

const getAllJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (_req: Request, res: Response) => {
  res.send("get job");
};

const createJob = async (req: CustomRequest, res: Response) => {
  if (isCreateJobRequest(req)) req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (_req: Request, res: Response) => {
  res.send("update job");
};

const deleteJob = async (_req: Request, res: Response) => {
  res.send("delete job");
};

export { getAllJobs, getJob, updateJob, deleteJob, createJob };
