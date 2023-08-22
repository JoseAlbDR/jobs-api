import { NextFunction, Response } from "express";
import { validateLoginData, validateRegisterData } from "../utils/validation";
import { ILoginRequest, IRegisterRequest } from "../types/interfaces";
import { BadRequestError } from "../errors";

const validateBody = (
  req: IRegisterRequest | ILoginRequest,
  _res: Response,
  next: NextFunction
) => {
  const { body } = req;

  let valid:
    | ReturnType<typeof validateRegisterData>
    | ReturnType<typeof validateLoginData>;

  if ("name" in body) {
    valid = validateRegisterData(body);
  } else {
    valid = validateLoginData(body);
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
