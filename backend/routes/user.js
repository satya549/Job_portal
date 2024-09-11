import express from "express";
import { register, login } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user", register);
router.post("/", login);

export default router;