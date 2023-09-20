import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    rooms: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    guests: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
    },
    OwnerEmail: {
      type: mongoose.Schema.Types.String,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Room || mongoose.model("Room", roomSchema);
