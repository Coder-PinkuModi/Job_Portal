// this will work as 

import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";

configDotenv();

// Create and export transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST_KEY,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_LOGIN_KEY,
    pass: process.env.SMTP_KEY,
  },
});

export default transporter;