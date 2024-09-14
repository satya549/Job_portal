import CompanyModel from "../models/company.model";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
     if(!companyName){
        throw new Error("Company name is required")
     }
    let company = await CompanyModel.findOne({ name: companyName });

    company = await CompanyModel.create({
      name: companyName,
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
  } catch (error) {
    console.error(error);
    res.json({
      status_code: 400,
      message: error.message,
    });
  }
};
