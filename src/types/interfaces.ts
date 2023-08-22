import { Request } from "express";

export interface ILoginRequest extends Request {
  body: IUser;
}

export interface IDecodedToken {
  id: number;
  username: string;
  iat: number;
  exp: number;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
