import express from "express";
import { tokenValidator } from "../middleware/authentication.js";
import { applyJob, getAplicants, getAppliedJobs } from "../controllers/application.controller.js";

const router = express.Router();

router.post("/", applyJob);
router.get("/", getAppliedJobs);
router.get("/", getAplicants);

export default router;