import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
  priceAtPurchase: {
    type: Number,
    required: true,
  },
  discountAtPurchase: {
    type: Number,
  },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderNumber: {
      type: String,
      required: true,
    },
    items: [orderItemSchema],

    subtotal: {
      type: Number,
    },
    tax: {
      type: Number,
    },
    shippingCost: {
      type: Number,
    },
    total: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
    },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  },
  { timestamp: true },
);

export default mongoose.model("Order", orderSchema);
