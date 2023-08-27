import { Response, Request } from "express";
import {
  IJobIdRequest,
  IJobRequest,
  IMongoJobQuery,
  IResultStats,
  IStats,
  IUpdateJobRequest,
} from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { Job } from "../Models/Job";
import { NotFoundError } from "../errors";
import mongoose from "mongoose";

const getAllJobs = async (req: Request, res: Response) => {
  const { search, status, jobType, sort } = req.jobQuery;

  const queryObject: IMongoJobQuery = {
    createdBy: req.user.userId,
  };

  if (search) {
    queryObject.position = {
      $regex: search,
      $options: "i",
    };
  }

  if (status && status !== "all") {
    queryObject.status = status;
  }

  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  let result = Job.find(queryObject);

  if (sort) {
    switch (sort) {
      case "oldest":
        result = result.sort("createdAt");
        break;
      case "latest":
        result = result.sort("-createdAt");
        break;
      case "a-z":
        result = result.sort("position");
        break;
      case "z-a":
        result = result.sort("-position");
        break;
      default:
        result = result.sort("createdAt");
    }
  }

  const page = req.jobQuery.page || 1;
  const limit = req.jobQuery.limit || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
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

const showStats = async (req: Request, res: Response) => {
  const stats: IStats[] = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  const resultStats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {} as IResultStats);

  res
    .status(StatusCodes.OK)
    .json({ defaultStats: resultStats, monthlyApplications: [] });
};

export { getAllJobs, getJob, updateJob, deleteJob, createJob, showStats };
