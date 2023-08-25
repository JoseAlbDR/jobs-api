import mongoose from "mongoose";
import { IJob } from "../types/interfaces";

const JobSchema = new mongoose.Schema<IJob>(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    jobLocation: {
      type: String,
      required: [true, "Please provide location"],
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "intership"],
      default: "full-time",
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model<IJob>("Job", JobSchema);
