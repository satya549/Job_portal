import express from "express";
import { register, login, logout, UpdateProfile } from "../controllers/user.controller.js";
import { tokenValidator } from "../middleware/authentication.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.get("/logout", logout);
router.put("/update/",tokenValidator, UpdateProfile);

export default router;