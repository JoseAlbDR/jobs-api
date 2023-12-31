import Joi from "joi";
import { IJob, IUpdateJob } from "../types/interfaces";

export const validateCreateJobData = (data: unknown) => {
  const jobSchema = Joi.object<IJob>({
    company: Joi.string(),
    position: Joi.string(),
    status: Joi.string(),
    jobLocation: Joi.string(),
    jobType: Joi.string(),
    createdBy: Joi.string().hex().length(24),
  });

  return jobSchema.validate(data, {
    errors: { wrap: { label: false } },
    // messages: {
    //   "any.required": "Please provide {#key}",
    // },
  });
};

export const validateUpdateJobData = (data: unknown) => {
  const jobSchema = Joi.object<IUpdateJob>({
    company: Joi.string(),
    position: Joi.string(),
    status: Joi.string(),
    jobLocation: Joi.string(),
    jobType: Joi.string(),
  });

  return jobSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}",
      "object.unknown": "Unknown parameter: {#key}",
    },
  });
};
