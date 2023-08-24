import express from "express";
import { login, register } from "../controllers/auth";
import validateBody from "../middleware/joi-validation";
import {
  validateLoginData,
  validateRegisterData,
} from "../utils/authValidation";
const router = express.Router();

router.post("/login", validateBody(validateLoginData), login);
router.post("/register", validateBody(validateRegisterData), register);

export default router;
