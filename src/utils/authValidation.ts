import Joi from "joi";
import { CustomBody, ILogin, IUser } from "../types/interfaces";

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
