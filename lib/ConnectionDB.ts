import mongoose from "mongoose";

let mongoDBUri = process.env.MONGODB_URI!;
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoDBUri);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.log("Erro connecting to database: ", error);
  }
};
