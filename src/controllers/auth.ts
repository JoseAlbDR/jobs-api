import { Response } from "express";
import { CustomRequest } from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { User } from "../Models/User";
import { UnauthenticatedError } from "../errors";
import { isLoginRequest } from "../utils/typeGuard";

const register = async (req: CustomRequest, res: Response) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req: CustomRequest, res: Response) => {
  if (isLoginRequest(req)) {
    const { loginEmail, password } = req.body;
    const user = await User.findOne({ email: loginEmail });

    if (!user) {
      throw new UnauthenticatedError("Invalid email");
    }

    const isPasswordCorrect = await user.checkPassword(password);

    if (!isPasswordCorrect) {
      throw new UnauthenticatedError("Incorrect password");
    }

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
  }
};
export { register, login };
