import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const jwtTokenSign = async (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRETFORAUTH, {
        expiresIn: "2d",
    });
};
