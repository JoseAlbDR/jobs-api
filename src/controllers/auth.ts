import { Response, Request } from "express";
import { IRegisterRequest } from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { User } from "../Models/User";
import bcrypt from "bcryptjs";

const register = async (req: IRegisterRequest, res: Response) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  const user = await User.create(tempUser);

  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (_req: Request, res: Response) => {
  res.send("register login");
};

export { register, login };
