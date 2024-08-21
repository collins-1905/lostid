// services/uploadPhoto.js
import cloudinary from "../config.js"; // Adjust the path accordingly

async function uploadPhoto(filePath) {
  try {
    // Upload photo to Cloudinary
    const result = await cloudinary.uploader.upload(filePath);

    // Return the URL of the uploaded photo
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error; // Optionally rethrow to handle further up the stack
  }
}

export default uploadPhoto;
