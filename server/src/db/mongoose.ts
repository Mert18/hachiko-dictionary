import mongoose from "mongoose";
import config from "config";

const MONGO_URI = config.get<string>("mongodburi");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
