import express from "express";
import { tokenValidator } from "../middleware/authentication.js";
import { applyJob, getAplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

router.get("/apply/:id",tokenValidator, applyJob);
router.get("/",tokenValidator, getAppliedJobs);
router.get("/applicants/:id",tokenValidator, getAplicants);
router.post("/:id",tokenValidator, updateStatus);

export default router;