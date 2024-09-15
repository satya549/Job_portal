import express from "express";
import { getCompanies, getCompany, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { tokenValidator } from "../middleware/authentication.js";

const router = express.Router();

router.post("/register",tokenValidator, registerCompany);
router.get("/get", tokenValidator, getCompanies);
router.get("/get/:id",tokenValidator, getCompany);
router.put("/update/:id",tokenValidator, updateCompany);

export default router;