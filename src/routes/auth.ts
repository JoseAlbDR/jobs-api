import express from "express";
import { login, register } from "../controllers/auth";
import validateRegistration from "../middleware/joi-validation";
const router = express.Router();

router.post("/login", login);
router.post("/register", validateRegistration, register);

export default router;
