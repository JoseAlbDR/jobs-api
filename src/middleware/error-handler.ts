import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";
import { MongoError } from "mongodb";
import { IDuplicateMongoError, IRequiredMongoError } from "../types/interfaces";
import { Error } from "mongoose";

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  if (err instanceof Error && err.name === "ValidationError") {
    const { errors } = err as IRequiredMongoError;
    const messages = Object.values(errors)
      .map((item) => item.message)
      .join(", ");
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: messages });
  }

  if (err instanceof MongoError && err.code === 11000) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: `Duplicate value entered for ${Object.keys(
        (err as IDuplicateMongoError).keyValue
      ).join(", ")} please enter a valid value`,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandlerMiddleware;
