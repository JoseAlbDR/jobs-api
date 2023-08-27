import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors";

export const testUser = (req: Request, _res: Response, next: NextFunction) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test User. Read Only!");
  }
  next;
};
