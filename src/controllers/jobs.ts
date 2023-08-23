import { Response, Request } from "express";
import {
  CustomRequest,
  IJobIdRequest,
  IUpdateJobRequest,
} from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { Job } from "../Models/Job";
import { isCreateJobRequest } from "../utils/typeGuard";
import { NotFoundError } from "../errors";

const getAllJobs = async (req: Request, res: Response) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req: IJobIdRequest, res: Response) => {
  const {
    user: { userId },
    params: { jobId },
  } = req;

  const job = await Job.findOne({ _id: jobId, createdBy: userId });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req: CustomRequest, res: Response) => {
  if (isCreateJobRequest(req)) req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req: IUpdateJobRequest, res: Response) => {
  const {
    user: { userId },
    params: { jobId },
  } = req;

  const jobChanges = req.body;

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    jobChanges,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (_req: Request, res: Response) => {
  res.send("delete job");
};

export { getAllJobs, getJob, updateJob, deleteJob, createJob };
