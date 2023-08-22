import express from "express";
import { login, register } from "../controllers/auth";
import validateBody from "../middleware/joi-validation";
const router = express.Router();

router.post("/login", validateBody, login);
router.post("/register", validateBody, register);

export default router;
