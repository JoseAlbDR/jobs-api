import { Request } from "express";
import { Document } from "mongoose";

export interface IRegisterRequest extends Request {
  body: IUser;
}

export interface IUserMethods {
  createJWT(): string;
}

export interface IUser extends Document, IUserMethods {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface IDecodedToken {
  id: number;
  username: string;
  iat: number;
  exp: number;
}
