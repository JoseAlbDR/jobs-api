import { Response, Request } from "express";
const getAllJobs = async (_req: Request, res: Response) => {
  res.send("get all jobs");
};

const getJob = async (_req: Request, res: Response) => {
  res.send("get job");
};

const createJob = async (_req: Request, res: Response) => {
  res.send("create job");
};

const updateJob = async (_req: Request, res: Response) => {
  res.send("update job");
};

const deleteJob = async (_req: Request, res: Response) => {
  res.send("delete job");
};

export { getAllJobs, getJob, updateJob, deleteJob, createJob };
