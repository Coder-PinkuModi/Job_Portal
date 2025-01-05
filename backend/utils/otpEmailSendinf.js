import transporter from "../services/emailServiceTransporter.js";
import dotenv from "dotenv";
dotenv.config();

const sendOtpEmail = async (email, otp, state) => {
  try {
    let subject, text, html;

    if (state === "register") {
      subject = "OTP for Sign-Up Verification";
      text = `Your OTP to verify your email is: ${otp}`;
      html = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Welcome to Our Platform!</h2>
          <p>Thank you for registering. Please use the OTP below to verify your email address:</p>
          <h1 style="color: #5e9ca0;">${otp}</h1>
          <p>This OTP is valid for 5 minutes. If you did not request this, please ignore this email.</p>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>Best Regards,</p>
            <p>JobPortal</p>
          </footer>
        </div>
      `;
    } else if (state === "resetPassword") {
      subject = "OTP for Password Reset";
      text = `Your OTP to reset your password is: ${otp}`;
      html = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Password Reset OTP</h2>
          <p>Please use the OTP below to reset your password:</p>
          <h1 style="color: #5e9ca0;">${otp}</h1>
          <p>This OTP is valid for 5 minutes. If you did not request this, please ignore this email.</p>
          <footer style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>Best Regards,</p>
            <p>JobPortal</p>
          </footer>
        </div>
      `;
    } else {
      throw new Error("Invalid state. Allowed values are 'register' and 'resetPassword'.");
    }

    const mailOption = {
      from: process.env.SMTP_SENDER_EMAIL,
      to: email,
      subject: subject,
      text: text,
      html: html,
    };

    const response = await transporter.sendMail(mailOption);
    console.log("Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error in email sending OTP code:", error);
    throw new Error("Failed to send OTP email.");
  }
};

export default sendOtpEmail;
