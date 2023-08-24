import Joi from "joi";
import { CustomBody, ILogin, IUser } from "../types/interfaces";

export const validateRegisterData = <T extends CustomBody>(data: T) => {
  const registerSchema = Joi.object<IUser>({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
  });

  return registerSchema.validate(data, {
    errors: { wrap: { label: false } },
    // messages: {
    //   "any.required": "Please provide {#key}",
    // },
  });
};

export const validateLoginData = <T extends CustomBody>(data: T) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const loginSchema = Joi.object<ILogin>({
    email: Joi.string().pattern(new RegExp(pattern)),
    password: Joi.string().min(6),
  });

  return loginSchema.validate(data, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
      // "any.required": "Please provide {#key}.",
      "string.pattern.base": "Please provide a valid email.",
    },
  });
};
