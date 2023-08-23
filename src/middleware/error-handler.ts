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
  // const customError: ICustomError = {
  //   // set default
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  //   msg: err.message || "Something went wrong try again later",
  // };

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  // if ((err as MongoError).code === 11000) {
  //   return res
  //     .status(StatusCodes.CONFLICT)
  //     .json({ msg: `Duplicate value entered for ${err.keyValue}`, err });
  // }

  if (err instanceof MongoError && err.code === 11000) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: `Duplicate value entered for ${Object.keys(
        (err as IMongoError).keyValue
      ).join(", ")} please enter a valid value`,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  // return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleware;
