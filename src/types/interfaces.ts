import { Request } from "express";
import { Model } from "mongoose";

export interface IRegisterRequest extends Request {
  body: IUser;
}

export interface ILoginRequest extends Request {
  body: ILogin;
}

export interface IUserMethods {
  createJWT(): string;
  checkPassword(candidatePassword: string): Promise<boolean>;
}

export type UserModel = Model<IUser, { [_ in never]: never }, IUserMethods>;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IDecodedToken {
  id: number;
  username: string;
  iat: number;
  exp: number;
}
