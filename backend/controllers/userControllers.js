import bcrypt from "bcryptjs";
import { userModel } from "../models/userModel.js";
import { jwtTokenSign } from "../utils/jwtTokenAuth.js";

async function register(req, res) {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    // console.log(req)
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const user = await userModel.findOne({ email: email });
    if (user)
      return res
        .status(400)
        .json({ message: "User already exists", success: false });

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      fullName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });

    return res
      .status(201)
      .json({
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
      // domain: "localhost",
      httpOnly: true,
      // sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ message: `Welcome ${user.fullName}`, success: true,
        userId: user._id,
        userName: user.fullName,
        // userEmail: user.email,
        role: user.role,
      });
    //   .header(`Authorization Bearer ${token}`)
  } catch (error) {
    console.log("error while login", error);
  }
}

function logout(req, res) {
  try {
    res.clearCookie("auth_token", {
      httpOnly: true,
      sameSite: "strict",
    });
    return res
      .status(200)
      .json({ message: "Logout successful", success: true });
  } catch (error) {
    console.log("error while logging out", error);
  }
}

export { register, login, logout };
