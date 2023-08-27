import "dotenv/config";
import { jobsData } from "../mock-data";
import { Job } from "./Models/Job";
import mongoose from "mongoose";

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL_V2);
    await Job.create(jobsData);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.log("Error!!!", error);
    process.exit(1);
  }
};

void start();
