import { Request } from "express";

export interface ILoginBody {
  username: string;
  password: number;
}

export interface ILoginRequest extends Request {
  body: ILoginBody;
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
