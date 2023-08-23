import Joi from "joi";
import { IJob } from "../types/interfaces";

export const validateJobData = (jobData: unknown) => {
  const jobSchema = Joi.object<IJob>({
    company: Joi.string().required(),
    position: Joi.string().required(),
    status: Joi.string(),
    // .valid("interview", "declined", "pending")
    // .default("pending"),
    createdBy: Joi.string().hex().length(24).required(),
  });

  return jobSchema.validate(jobData, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}",
    },
  });
};
