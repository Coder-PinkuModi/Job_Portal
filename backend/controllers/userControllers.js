import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import { jwtTokenSign } from "../utils/jwtTokenAuth.js";
import cloudinaryUploader from "../utils/coudinary.js";
import dotenv from "dotenv";
dotenv.config();

async function register(req, res) {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const file = req.file;
    // console.log("file while register",file)

    if (!file) {
      return res
        .status(400)
        .json({ message: "Profile picture is required", success: false });
    }

    const user = await userModel.findOne({ email: email });
    if (user)
      return res
        .status(400)
        .json({ message: "User already exists", success: false });

    const secureUrlToFile = await cloudinaryUploader(file.filename);

    if (!secureUrlToFile) {
      return res
        .status(400)
        .json({ message: "Profile picture upload failed", success: false });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      fullName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
      profile: { profilePhoto: secureUrlToFile }
    });

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const user = await userModel.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ message: "User does not exist", success: false });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        message: "Invalid credentials",
        success: false,
      });

    const token = await jwtTokenSign({ _id: user._id, role: user.role });

    res.cookie("auth_token", token, {
      domain: "localhost",
      // httpOnly: true,
      // sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // console.log("user ", user);

    return res.status(200).json({
      message: `Welcome ${user.fullName}`,
      success: true,
      userId: user._id,
      userName: user.fullName,
      userEmail: user.email,
      userProfilePic: user.profile.profilePhoto,
      role: user.role,
    });
    //   .header(`Authorization Bearer ${token}`)
  } catch (error) {
    console.log("error while login", error);
  }
}

async function userProfile(req, res) {
  try {
    const auth_token = req.cookies?.auth_token;
    if (!auth_token) {
      return res.status(400).json({
        message: "Unauthorized access, token not found",
        success: false,
      });
    }

    const decoded = jwt.verify(auth_token, process.env.JWT_SECRETFORAUTH);

    if (!decoded) {
      return res.status(400).json({
        message: "Unauthorized access, decode not done",
        success: false,
      });
    }

    const user = await userModel.findOne({ _id: decoded._id });

    if (!user) {
      return res.status(400).json({
        message: "Unauthorized access, user not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User profile",
      success: true,
      userId: user._id,
      userName: user.fullName,
      userEmail: user.email,
      userProfilePic: user.profile.profilePhoto,
      role: user.role,
    });
  } catch (error) {
    console.log("error while getting user profile", error);
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("auth_token", {
      sameSite: "strict",
    });
    return res
      .status(200)
      .json({ message: "Logout successful", success: true });
  } catch (error) {
    console.log("error while logging out", error);
  }
}

export { register, login, userProfile, logout };
