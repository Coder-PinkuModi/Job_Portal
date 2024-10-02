import { register, getCompany, getCompanyById, updateCompany } from "../controllers/companyController.js";
import { isAuthenticated } from "../middlewares/authenticationMiddlewares.js"
import express from "express";

const Router= express.Router()

Router.route("/register").post(register);
Router.route("/getCompany").post(isAuthenticated, getCompany);
Router.route("/getCompanyById/:companyId").get(getCompanyById);
Router.route("/updateCompany").put(isAuthenticated, updateCompany);

export default Router