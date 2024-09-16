import express from "express";
import { tokenValidator } from "../middleware/authentication.js";
import { CreateJob, getAdminJobs, getAllJobs, getJobById } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/create", tokenValidator,CreateJob);
router.get("/Alljobs", tokenValidator,getAllJobs );
router.get("/:id", tokenValidator, getJobById);
router.get("/adminJobs/:id",tokenValidator, getAdminJobs);

export default router;