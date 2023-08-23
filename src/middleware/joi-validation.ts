import { NextFunction, Response } from "express";
import {
  validateLoginData,
  validateRegisterData,
} from "../utils/authValidation";
import { CustomRequest } from "../types/interfaces";
import { BadRequestError } from "../errors";
import { validateJobData } from "../utils/jobsValidation";
import {
  isCreateJobRequest,
  isRegisterRequest,
  isLoginRequest,
} from "../utils/typeGuard";

const validateBody = (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  let valid:
    | ReturnType<typeof validateRegisterData>
    | ReturnType<typeof validateLoginData>
    | ReturnType<typeof validateJobData>;

  if (isRegisterRequest(req)) {
    valid = validateRegisterData(req.body);
  } else if (isCreateJobRequest(req)) {
    valid = validateJobData(req.body);
  } else if (isLoginRequest(req)) {
    valid = validateLoginData(req.body);
  } else {
    throw new BadRequestError("Missing required fields");
  }

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
