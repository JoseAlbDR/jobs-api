import express from "express";
import { login, register } from "../controllers/auth";
import validateBody from "../middleware/joi-validation";
import {
  validateLoginData,
  validateRegisterData,
} from "../utils/authValidation";
import rateLimiter from "express-rate-limit";
const router = express.Router();

const authLimiter = rateLimiter({
  windowMs: 60 * 60 * 1000,
  message:
    "Too many accounts created from this IP, please try again after an hour",
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/login", validateBody(validateLoginData), login);
router.post(
  "/register",
  authLimiter,
  validateBody(validateRegisterData),
  register
);

export default router;
