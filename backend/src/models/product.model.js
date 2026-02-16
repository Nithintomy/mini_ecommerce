import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
  },
  images: [String],
  isActive: {
    type: String,
    default: true,
  },
},{timestamp:true});



export default mongoose.model("Product", productSchema)
