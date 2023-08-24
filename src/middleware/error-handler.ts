import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";
import { MongoError } from "mongodb";
import { IMongoError } from "../types/interfaces";

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  if (err instanceof MongoError && err.code === 11000) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: `Duplicate value entered for ${Object.keys(
        (err as IMongoError).keyValue
      ).join(", ")} please enter a valid value`,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandlerMiddleware;
