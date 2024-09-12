import express from "express";
import { register, login, logout, UpdateProfile } from "../controllers/user.controller.js";
import { tokenValidator } from "../middleware/authentication.js";

const router = express.Router();

router.post("/user", register);
router.post("/", login);
router.post("/", logout);
router.put("/update", UpdateProfile);

export default router;