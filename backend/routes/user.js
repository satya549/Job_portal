import express from "express";
import { register, login, logout, UpdateProfile } from "../controllers/user.controller.js";
import { tokenValidator } from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.put("/update/:id",tokenValidator, UpdateProfile);

export default router;