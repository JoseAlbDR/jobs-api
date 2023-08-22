import { Response, Request } from "express";
const register = async (_req: Request, res: Response) => {
  res.send("register user");
};

const login = async (_req: Request, res: Response) => {
  res.send("register login");
};

export { register, login };
