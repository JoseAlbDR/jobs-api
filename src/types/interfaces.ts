import { Request } from "express";

export interface IRegisterRequest extends Request {
  body: IUser;
}

export interface IUser {
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
