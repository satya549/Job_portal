import express from "express";
import { register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user", register);

export default router;