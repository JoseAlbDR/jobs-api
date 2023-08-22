import { Response, Request } from "express";
import { IRegisterRequest } from "../types/interfaces";
// import { User } from "../Models/User";
const register = async (req: IRegisterRequest, res: Response) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  res.send("register user");
};

const login = async (_req: Request, res: Response) => {
  res.send("register login");
};

export { register, login };
