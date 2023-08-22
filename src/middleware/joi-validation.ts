import { NextFunction, Response } from "express";
import { validateUserData } from "../utils/validation";
import { IRegisterRequest } from "../types/interfaces";
import { BadRequestError } from "../errors";

const validateLoginQuery = (
  req: IRegisterRequest,
  _res: Response,
  next: NextFunction
) => {
  const { body } = req;
  const valid = validateUserData(body);

  if (valid.error) {
    const messages = valid.error.details.map(
      (detail): string => detail.message
    );
    throw new BadRequestError(messages.join(" "));
  }

  req.body = valid.value;
  return next();
};

export default validateLoginQuery;
