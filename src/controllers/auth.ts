import { Response, Request } from "express";
import { IRegisterRequest } from "../types/interfaces";
import { StatusCodes } from "http-status-codes";
import { User } from "../Models/User";
// import { User } from "../Models/User";
const register = async (req: IRegisterRequest, res: Response) => {
  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (_req: Request, res: Response) => {
  res.send("register login");
};

export { register, login };
