import ApplicationModel from "../models/application.model.js";
import jobModel from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      throw new Error("jobId is required");
    }

    const existingApplication = await ApplicationModel.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      throw new Error("You have already applied");
    }
    const job = await jobModel.findById(jobId);
    if (!job) {
      throw new Error("job not found");
    }
    const newApplication = await ApplicationModel.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();

    return res.status(200).json({
      message: "Job applied sussessfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await ApplicationModel.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        }
      });
    if (!application) {
      throw new Error("No applications");
    }
    return res.status(200).json({
      application,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobApplicaton = await jobModel.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      throw new Error("No Applicatin");
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      throw new Error("status is required");
    }
    const application = await ApplicationModel.findOne({ _id: applicationId });
    if (!application) {
      throw new Error("Application not found");
    }
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).json({
      message: "Status updated successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
