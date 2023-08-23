import {
  CustomRequest,
  IRegisterRequest,
  IJobRequest,
  ILoginRequest,
} from "../types/interfaces";

export const isRegisterRequest = (b: CustomRequest): b is IRegisterRequest => {
  return (
    (b as IRegisterRequest).body.name !== undefined &&
    (b as IRegisterRequest).body.email !== undefined &&
    (b as IRegisterRequest).body.password !== undefined
  );
};

export const isCreateJobRequest = (b: CustomRequest): b is IJobRequest => {
  return (
    (b as IJobRequest).body.company !== undefined &&
    (b as IJobRequest).body.position !== undefined
  );
};

export const isLoginRequest = (b: CustomRequest): b is ILoginRequest => {
  return (
    (b as ILoginRequest).body.loginEmail !== undefined &&
    (b as ILoginRequest).body.password !== undefined
  );
};
