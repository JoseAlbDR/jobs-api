import Joi from "joi";
import { ILogin, IUser } from "../types/interfaces";

export const validateRegisterData = (registerData: unknown) => {
  const registerSchema = Joi.object<IUser>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return registerSchema.validate(registerData, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}",
    },
  });
};

export const validateLoginData = (loginData: unknown) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const loginSchema = Joi.object<ILogin>({
    loginEmail: Joi.string().pattern(new RegExp(pattern)).required(),
    password: Joi.string().min(6).required(),
  });

  return loginSchema.validate(loginData, {
    errors: { wrap: { label: false } },
    messages: {
      "any.required": "Please provide {#key}.",
      "string.pattern.base": "Provide a valid email.",
    },
  });
};
