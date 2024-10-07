import express from "express";
import { register, login,userProfile, logout } from "../controllers/userControllers.js";

const router= express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(userProfile)
router.route("/logout").get(logout);

export default router