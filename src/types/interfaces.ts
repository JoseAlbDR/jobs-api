import { Request } from "express";
import mongoose, { Model } from "mongoose";
import { MongoError } from "mongodb";

export interface IRegisterRequest extends Request {
  body: IUser;
}

export interface ILoginRequest extends Request {
  body: ILogin;
}

export interface IJobRequest extends Request {
  body: IJob;
}

export interface IJobIdRequest extends Request {}

export interface IUpdateJobRequest extends Request {
  params: {
    jobId: string;
  };
  body: IUpdateJob;
}

export interface IUpdateJob {
  company?: string;
  position?: string;
  status?: "interview" | "declined" | "pending";
}

export type CustomRequest = IRegisterRequest | ILoginRequest | IJobRequest;

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

export interface IDecodedToken {
  userId: string;
  username: string;
  iat: number;
  exp: number;
}

export interface IJob {
  company: string;
  position: string;
  status?: "interview" | "declined" | "pending";
  createdBy?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId>;
}

export interface IMongoError extends MongoError {
  keyValue: {
    [x: string]: string;
  };
}
