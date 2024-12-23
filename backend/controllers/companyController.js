import { companyModel } from "../models/companyModel.js";
import cloudinaryUploader from "../utils/coudinary.js";

export const register = async (req, res) => {
  try {
    const { companyName, description, website, location } = req.body;

    /*
    By debugging we get to knew that, in req.user we get the whole user object, paased by the isAuthenticated middleware check. 
    */

    const userId = req.user._id;
    const file = req.file;

    // verfiying the inputs
    if (!companyName)
      return res
        .status(400)
        .json({ message: `Company name required`, success: false });
    if (!description)
      return res
        .status(400)
        .json({ message: `Company description required`, success: false });
    if (!location)
      return res
        .status(400)
        .json({ message: `Company location required`, success: false });
    if (!file)
      return res
        .status(400)
        .json({ message: `Company logo required`, success: false });

    const company = await companyModel.findOne({ name: companyName });

    // checking for the duplication of company name
    if (company)
      return res.status(400).json({
        message: `company with same name already exists`,
        success: false,
      });

    // uploading the logo and get it's URL
    const secureUrlToLogo = await cloudinaryUploader(file.filename);

    const companyPayload = {
      name: companyName,
      description,
      location,
      logo: secureUrlToLogo,
      userId: userId,
    };

    if (website) companyPayload.website = website;

    const newCompany = await companyModel.create(companyPayload);

    console.log("Company created successfully:", newCompany);

    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company: newCompany,
    });
  } catch (error) {
    console.log("error while registering company", error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.user._id;
    const company = await companyModel.find({ userId: userId });
    if (!company)
      return res.status(400).jdon({
        message: "Company not found",
        success: false,
      });

      // console.log("companies in backend while getiing all companies from home page of frontend", company)

    return res.status(200).json({
      message: "Company found successfully",
      companies: company,
      success: true,
    });
  } catch (error) {
    console.log("error while getting company", error);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await companyModel.findOne({ _id: companyId });
    if (!company)
      return res.status(400).jdon({
        message: "Company not found",
        success: false,
      });

    return res.status(200).json({
      message: "Company found successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log("error while searched getting company", error);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { companyName, description, website, location } = req.body;
    // const file = req.file;
    const updateData = {
      ...(companyName && { companyName }),
      ...(description && { description }),
      ...(website && { website }),
      ...(location && { location }),
    };

    const company = await companyModel.findByIdAndUpdate(
      companyId,
      { $set: updateData },
      { new: true }
    );

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res
      .status(200)
      .json({ message: "Company updated successfully", company });
  } catch (error) {
    console.log("error while updating company", error);
  }
};
