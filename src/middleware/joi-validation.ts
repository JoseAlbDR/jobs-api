import { NextFunction, Response } from "express";
import { CustomRequest, IJob, ILogin, IUser } from "../types/interfaces";
import { BadRequestError } from "../errors";
import Joi from "joi";

type ValidationFunction = (
  data: unknown
) => Joi.ValidationResult<IUser | ILogin | IJob>;

const validateBody =
  (validationFunction: ValidationFunction) =>
  (req: CustomRequest, _res: Response, next: NextFunction) => {
    const valid = validationFunction(req.body);

    if (valid.error) {
      const messages = valid.error.details.map(
        (detail): string => detail.message
      );
      throw new BadRequestError(messages.join(" "));
    }

    req.body = valid.value;
    return next();
  };

export default validateBody;
