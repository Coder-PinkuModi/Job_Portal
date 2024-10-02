// here we will check if the user is authenticated or not
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.auth_token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized access", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRETFORAUTH);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Unauthorized access", success: false });
    }

    const user= await userModel.findOne({ _id: decoded._id });

    req.user= user

    next()
  } catch (error) {
    console.log("error while auth check middleware",error);
    return res
      .status(401)
      .json({ message: "Unauthorized access", success: false });
  }
};
