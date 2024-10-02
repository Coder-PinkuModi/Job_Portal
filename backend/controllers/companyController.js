import { companyModel } from "../models/companyModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { companyName, email, description, password } =
      req.body;
    if (!companyName)
      return res
        .status(400)
        .json({ message: `Company name required`, success: false });
    if (!email)
      return res
        .status(400)
        .json({ message: `Company email required`, success: false });
    if (!description)
      return res
        .status(400)
        .json({ message: `Company description required`, success: false });
    if (!password)
      return res
        .status(400)
        .json({ message: `Password required`, success: false });

    const company = await companyModel.findOne({ email: email });

    if (company)
      return res.status(400).json({
        message: `company with same name already exists`,
        success: false,
      });

    const hashPassword = await bcrypt.hash(password, 10);

    await companyModel.create({
      companyName,
      password: hashPassword,
      description,
    });
    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
    });
  } catch (error) {
    console.log("error while registering company", error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.user._id;
    const company = await companyModel.find({ _id: userId });
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
    const { companyName, description, website, phoneNumber, location } =
      req.body;
    // const file = req.file;
    const updateData = {
      ...(companyName && { companyName }),
      ...(description && { description }),
      ...(website && { website }),
      ...(phoneNumber && { phoneNumber }),
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

    return res.status(200).json({ message: "Company updated successfully", company });
  } catch (error) {
    console.log("error while updating company", error);
  }
};
