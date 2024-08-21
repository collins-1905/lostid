export const PORT = 3000;

export const mongodbURL =
  "mongodb+srv://admin:b6kNswTVN7xSc35l@tumetenga.v0tv4.mongodb.net/?retryWrites=true&w=majority&appName=Tumetenga";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dd8zeci24",
  api_key: "722985557238994",
  api_secret: "H0w7oSpzVxL2CTLXI6cDqPc-60E",
});

export default cloudinary;
