import { Response, Request } from "express";
import {
  IJobIdRequest,
  IJobQuery,
  IJobRequest,
  IUpdateJobRequest,
} from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { Job } from "../Models/Job";
import { NotFoundError } from "../errors";

const getAllJobs = async (req: Request, res: Response) => {
  const queryObject: IJobQuery = {};

  console.log(req.jobQuery);

  if (req.jobQuery.search && typeof req.jobQuery.search === "string") {
    queryObject.position = {
      $regex: req.jobQuery.search,
      $options: "i",
    };
  }

  const jobs = await Job.find({
    createdBy: req.user.userId,
    ...queryObject,
  }).sort("createdAt");

  res.status(StatusCodes.OK).json({ jobs });
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

const createJob = async (req: IJobRequest, res: Response) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
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
    throw new NotFoundError(`No item found with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req: IJobIdRequest, res: Response) => {
  const {
    user: { userId },
    params: { jobId },
  } = req;

  const deleteResult = await Job.deleteOne({ _id: jobId, createdBy: userId });

  if (!deleteResult.deletedCount) {
    throw new NotFoundError(`Task with id ${jobId} does not exist`);
  }

  res.status(StatusCodes.OK).json({ deleteResult });
};

export { getAllJobs, getJob, updateJob, deleteJob, createJob };
