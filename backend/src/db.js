import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect();
  } catch (err) {
    console.log("error connecting database");
  }
};

export default connectDB;