import { Response } from "express";
import {
  ILoginRequest,
  IRegisterRequest,
  IUpdateUserRequest,
} from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { User } from "../Models/User";
import { NotFoundError, UnauthenticatedError } from "../errors";

const register = async (req: IRegisterRequest, res: Response) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      token,
    },
  });
};

const login = async (req: ILoginRequest, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid email");
  }

  const isPasswordCorrect = await user.checkPassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Incorrect password");
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      token,
    },
  });
};

const updateUser = async (req: IUpdateUserRequest, res: Response) => {
  const {
    user: { userId },
  } = req;

  const userChanges = req.body;

  const user = await User.findOneAndUpdate({ _id: userId }, userChanges, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new NotFoundError(`No item found with id ${userId}`);
  }
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ ...user, token });
};

export { register, login, updateUser };
