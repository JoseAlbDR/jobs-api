import Joi from "joi";
import { ILogin, IUser } from "../types/interfaces";

export const validateRegisterData = (data: unknown) => {
  const registerSchema = Joi.object<IUser>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return registerSchema.validate(data, {
    errors: { label: false }, // Removed unnecessary 'wrap' property
    messages: {
      "any.required": "Please provide {#key}",
    },
  });
};

export const validateLoginData = (data: unknown) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const loginSchema = Joi.object<ILogin>({
    email: Joi.string().pattern(new RegExp(pattern)).required(),
    password: Joi.string().min(6).required(),
  });

  return loginSchema.validate(data, {
    errors: { label: false }, // Removed unnecessary 'wrap' property
    messages: {
      "any.required": "Please provide {#key}.",
      "string.pattern.base": "Please provide a valid email.",
    },
  });
};
