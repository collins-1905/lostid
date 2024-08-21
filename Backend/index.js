import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cloudinary from "./config.js";
import fs from "fs";
import uploadPhoto from "./services/uploadphoto.js";
import { PORT, mongodbURL } from "./config.js";
import { IdCard } from "./models/idModel.js";

const app = express();
app.use(express.json());
app.use(cors());

async function handleUploadPhoto() {
  const filePath = "";

  try {
    const photoURL = await uploadPhoto(filePath);
    console.log("Photo URL:", photoURL);
  } catch (error) {
    console.error("Error uploading photo:", error);
  }
}

// app.get("/", (req, res) => {});

//UPLOAD MISSING ID
app.post("/idcard", async (req, res) => {
  try {
    // handleUploadPhoto();
    if (
      !req.body.serialNumber ||
      !req.body.idNumber ||
      !req.body.contactNumber //||
      // !req.body.photoURL
    ) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const newId = {
      serialNumber: req.body.serialNumber,
      idNumber: req.body.idNumber,
      contactNumber: req.body.contactNumber,
      photoURL: req.body.photoURL,
    };

    const id = await IdCard.create(newId);
    return res.status(201).send(id);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//FIND MISSING ID

app.get("/idcard/:idNumber", async (req, res) => {
  try {
    const id = await IdCard.findOne({ idNumber: req.params.idNumber });
    if (!id) {
      return res.status(404).send("id not found.");
    }

    res.send(id);
  } catch (error) {
    console.error("Error retrieving id:", error);
  }
});

mongoose
  .connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
