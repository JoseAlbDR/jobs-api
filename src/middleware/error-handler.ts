import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/custom-error";
import { StatusCodes } from "http-status-codes";
import { MongoError } from "mongodb";

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  if ((err as MongoError).code === 11000) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ msg: "Email Already exist in database", err });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
};

export default errorHandlerMiddleware;
