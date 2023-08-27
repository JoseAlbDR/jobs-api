import { Request } from "express";
import mongoose, { Model } from "mongoose";
import { MongoError } from "mongodb";

// User interfaces
export type UserModel = Model<IUser, { [_ in never]: never }, IUserMethods>;

export interface IUserMethods {
  createJWT(): string;
  checkPassword(candidatePassword: string): Promise<boolean>;
}

export interface IRegisterRequest extends Request {
  body: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  lastName?: string;
  location?: string;
}

export interface IUpdateUserRequest extends Request {
  body: IUpdateUser;
}

export interface IUpdateUser {
  _id?: string;
  name?: string;
  lastName?: string;
  email?: string;
  location?: string;
}

// Stats interfaces

export interface IStats {
  _id: string;
  count: number;
}

export interface IResultStats {
  pending: number;
  interview: number;
  declined: number;
  [x: string]: number;
}

export interface IMontlyApplications {
  _id: { year: number; month: number };
  count: number;
}

// Auth interfaces
export interface ILoginRequest extends Request {
  body: ILogin;
}

export interface ILogin {
  email: string;
  password: string;
}

// Job interfaces
export interface IJobIdRequest extends Request {
  params: {
    jobId: string;
  };
}

export interface IJobRequest extends Request {
  body: IJob;
}

export interface IJob {
  _id?: string;
  company: string;
  position: string;
  jobLocation: string;
  status?: StatusTypes;
  jobType?: JobTypes;
  createdBy?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  createdAt?: string;
}

export interface IUpdateJobRequest extends Request {
  params: {
    jobId: string;
  };
  body: IUpdateJob;
}

export interface IUpdateJob {
  company?: string;
  position?: string;
  status?: StatusTypes;
  jobType?: JobTypes;
  jobLocation?: string;
}

type JobTypes = "full-time" | "part-time" | "remote" | "internship";
type StatusTypes = "interview" | "declined" | "pending";

export type IJobPosition = {
  $regex: string;
  $options: "i";
};

export interface IJobQuery {
  search?: string;
  status?: "all" | StatusTypes;
  jobType?: "all" | JobTypes;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface IMongoJobQuery {
  createdBy: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  position?: IJobPosition;
  status?: "all" | StatusTypes;
  jobType?: "all" | JobTypes;
  sort?: string;
  page?: number;
}

// Validation interfaces
export type CustomRequest =
  | IRegisterRequest
  | ILoginRequest
  | IJobRequest
  | IUpdateJobRequest
  | IUpdateUserRequest;

export type CustomBody = ILogin | IUser | IJob | IUpdateJob | IUpdateUser;

// JWT interfaces
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

// Error interfaces
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
