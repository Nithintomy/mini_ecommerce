import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      indexed: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    address: addressSchema,
  },
  { timestamp: true },
);

export default mongoose.model("User", userSchema);
