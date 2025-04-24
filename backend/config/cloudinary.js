// CLOUDINARY_API_KEY = "726857697645669"
// CLOUDINARY_SECRET_KEY = "4Wwg0JbJOtQ9p1uNskf9TFPsw-w"
// CLOUDINARY_NAME = "dk5w79hpm"ake async arrow function for connecting with cloudinary
// cloudinary.config({}) vary impotant an now we can take name cloud_name: process.env.CLOUND_NAME
// Export

import { v2 as cloudinary } from "cloudinary";
// v2 take as cloudinary and

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
