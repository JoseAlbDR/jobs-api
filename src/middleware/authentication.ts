import { Request, Response, NextFunction } from "express";
// import { User } from "../Models/User";
import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors";
import { IDecodedToken } from "../types/interfaces";

const authenticationMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET) as IDecodedToken;
    const { userId, username } = payload;
    req.user = { userId, username };
    next();
  } catch (error) {
    console.log(error);
    throw new UnauthenticatedError("Unauthenticated");
  }
};

export default authenticationMiddleware;
