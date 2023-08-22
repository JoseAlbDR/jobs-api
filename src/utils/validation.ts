import Joi from "joi";
import { IUser } from "../types/interfaces";

export const validateUserData = (userData: unknown) => {
  const loginSchema = Joi.object<IUser>({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return loginSchema.validate(userData, { errors: { wrap: { label: false } } });
};
