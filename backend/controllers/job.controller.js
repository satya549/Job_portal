import jobModel from "../models/job.model.js";

export const CreateJob = async (req,res) =>{
    try {
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            throw new Error("Some required fields are missing.");
          }
          const userId = req.id;
          let newJob = await jobModel.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobType,
            experience:experience,
            position,
            company:companyId,
            created_by:userId
          });
      
          return res.status(201).json({
            success: true,
            message: "Job created successfully.",
            data: newJob,
          });
        } catch (error) {
          console.error(error);
          return res.status(400).json({
            status_code: 400,
            success: false,
            message: error.message,
          });
        }
      };

export const getAllJobs = async (req, res) => {
  try {
    const job = req.query.job || "";
    const query = {
      $or: [
        { title: { $regex: job, $options: "i" } },
        { description: { $regex: job, $options: "i" } },
      ],
    };
    const jobs = await jobModel.find(query).populate({
        path: "company",
      }).sort({ createdAt: -1 });
    if (!jobs) {
      throw new Error("Jobs not found.");
    }
    return res.status(201).json({
      success: true,
      jobs,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      status_code: 400,
      success: false,
      message: error.message,
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await jobModel.findById(jobId);
    if (!job) {
      throw new Error("jobs not found");
    }
    return res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
   
    const jobs = await jobModel.find({ created_by:adminId });
    if (!jobs) {
      throw new Error("Jobs not found.");
    }
    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(400).json({
      status_code: 400,
      success: false,
      message: error.message,
    });
  }
};
