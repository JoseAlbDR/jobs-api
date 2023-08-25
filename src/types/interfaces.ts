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

export type CustomRequest =
  | IRegisterRequest
  | ILoginRequest
  | IJobRequest
  | IUpdateJobRequest;
export type CustomBody = ILogin | IUser | IJob | IUpdateJob;

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
  lastName?: string;
  location?: string;
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

type StatusTypes = "interview" | "declined" | "pending";

export interface IJob {
  company: string;
  position: string;
  status?: StatusTypes;
  createdBy?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId>;
}

export interface IUpdateJob {
  company?: string;
  position?: string;
  status?: StatusTypes;
}

export interface IDuplicateMongoError extends MongoError {
  keyValue: {
    [x: string]: string;
  };
}

export interface IRequiredMongoError extends MongoError {
  errors: {
    [x: string]:
      | { [y: string]: string }
      | { [y: string]: { [z: string]: string } };
  };
}

export interface ICastMongoError extends MongoError {
  reason: { [x: string]: string };
  value: string;
}
