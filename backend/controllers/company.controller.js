import CompanyModel from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName,location } = req.body;
    if (!companyName || !location) {
      throw new Error("CompanyName and location are required.");
    }
    let company = await CompanyModel.findOne({ name: companyName });

    company = await CompanyModel.create({
      name: companyName,
      location,
      userId: req.id,
    });
    return res.status(200).json({
      company,
      message: " Company registered successfully.",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await CompanyModel.find({ userId });
    if (!companies) {
      throw new error("Companies not found.");
    }
    return res.status(200).json({
      companies,
      success:true
    })
  } catch (error) {
    console.error(error);
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await CompanyModel.findById(companyId);
    if (!company) {
      throw new Error("Company not fonud.");
    }
    return res.status(200).json({
      company,
      success:true
    })
  } catch (error) {
    console.error(error);
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    const company = await CompanyModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        website,
        location,
      },
      { new: true }
    );
    return res.status(200).json({
      company,
      message:"Updated seccessfully",
      success:true
    })
  } catch (error) {
    console.error(error);
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
};
