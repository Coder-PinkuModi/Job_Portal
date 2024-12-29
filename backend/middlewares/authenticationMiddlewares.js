// here we will check if the user is authenticated or not
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { userModel } from "../models/userModel.js"
dotenv.config();


export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.auth_token;
    // console.log("token",token);
    
    if (!token) {
      // console.log("Unauthorized access, token not found")
      return res
        .status(401)
        .json({ message: "Unauthorized access, token not found", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRETFORAUTH);
    if (!decoded) {
      console.log("Unauthorized access, decode not done")
      return res
        .status(401)
        .json({ message: "Unauthorized access, login again", success: false });
    }

    const user= await userModel.findOne({ _id: decoded._id });

    req.user= user
    // console.log("user",user);
    

    next()
  } catch (error) {
    console.log("error while auth check middleware",error);
    return res
      .status(401)
      .json({ message: "Unauthorized access", success: false });
  }
};
