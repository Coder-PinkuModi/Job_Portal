import { register, getCompany, getCompanyById, updateCompany } from "../controllers/companyController.js";
import { isAuthenticated } from "../middlewares/authenticationMiddlewares.js"
import multer from "../middlewares/multer.js"
import express from "express";

const Router= express.Router()

Router.route("/register").post(isAuthenticated, multer.single("companyLogo"), register);
Router.route("/getAllCompany").get(isAuthenticated, getCompany);
Router.route("/getCompanyById/:companyId").get(getCompanyById);
Router.route("/updateCompany").put(isAuthenticated, updateCompany);

export default Router