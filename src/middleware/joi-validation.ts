import { NextFunction, Response } from "express";
import { CustomBody, CustomRequest } from "../types/interfaces";
import { BadRequestError } from "../errors";
import Joi from "joi";

type ValidationFunction = <T extends CustomBody>(
  data: T
) => Joi.ValidationResult<CustomBody>;

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
    next();
  };

export default validateBody;
