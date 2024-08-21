import mongoose from "mongoose";

const IdCardSchema = mongoose.Schema({
  serialNumber: {
    type: Number,
    required: true,
  },
  idNumber: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  photoURL: {
    type: String,
    required: false,
  },
});

export const IdCard = mongoose.model("Cat", IdCardSchema);
