import Joi from "joi";
import { CustomBody, IJob } from "../types/interfaces";

export const validateCreateJobData = <T extends CustomBody>(data: T) => {
  const jobSchema = Joi.object<IJob>({
    company: Joi.string().required(),
    position: Joi.string().required(),
    status: Joi.string(),
    // .valid("interview", "declined", "pending")
    // .default("pending"),
    createdBy: Joi.string().hex().length(24),
  });

  return jobSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}",
    },
  });
};

export const validateUpdateJobData = <T extends CustomBody>(data: T) => {
  const jobSchema = Joi.object<IJob>({
    company: Joi.string(),
    position: Joi.string(),
    status: Joi.string(),
  });

  return jobSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}",
      "object.unknown": "Unknown parameter: {#key}",
    },
  });
};
