import path from "path";
import fs from "fs"
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { __dirnameRootDirectory } from "../index.js";
dotenv.config();
const Cloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
};

export default async function uploadFilesToCloudinary(localfile) { //paramter is the file name we want to upload
    
    if(!localfile){
        return null
    }
    
    const filepath = path.resolve(__dirnameRootDirectory, "uploads", localfile);
    try {
    // configuration of cloudinary will run
    Cloudinary();

    // uploading the recieved file to cloudinary
    const result = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });

    return result.secure_url;
  } catch (err) {
    console.log("Error while uploading file to cloudinary", err);
  }
  finally{
    fs.unlink(filepath, (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
        } else {
          console.log("File deleted from the server after upload.");
        }
      });
  }
}
