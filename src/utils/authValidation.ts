import Joi from "joi";
import { CustomBody, ILogin, IUpdateUser, IUser } from "../types/interfaces";

export const validateRegisterData = <T extends CustomBody>(data: T) => {
  const registerSchema = Joi.object<IUser>({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string().min(6),
  });

  return registerSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
    },
  });
};

export const validateLoginData = <T extends CustomBody>(data: T) => {
  const loginSchema = Joi.object<ILogin>({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return loginSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
      "any.required": "Please provide {#key}",
    },
  });
};

export const validateUpdateUserData = <T extends CustomBody>(data: T) => {
  const jobSchema = Joi.object<IUpdateUser>({
    name: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    location: Joi.string(),
  });

  return jobSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}",
      "object.unknown": "Unknown parameter: {#key}",
    },
  });
};
