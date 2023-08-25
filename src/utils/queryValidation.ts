import Joi from "joi";
import { IJobQuery } from "../types/interfaces";

export const validateJobQuery = (query: unknown) => {
  const querySchema = Joi.object<IJobQuery>({
    search: Joi.string().label("Name"),
    status: Joi.string(),
    jobType: Joi.string(),
    sort: Joi.string(),
    page: Joi.number(),
  });
  return querySchema.validate(query, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
      "any.invalid": "Not Allowed Values: {#invalidValues}.",
      "string.pattern.base": "Invalid syntax for numeric condition: {#value}",
    },
  });
};
