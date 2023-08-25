import { Response } from "express";
import { ILoginRequest, IRegisterRequest } from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { User } from "../Models/User";
import { UnauthenticatedError } from "../errors";

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
  res.status(StatusCodes.OK).json({ user: { name: user.name, token } });
};

export { register, login };
