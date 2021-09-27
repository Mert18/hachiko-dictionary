import dotenv from "dotenv";

dotenv.config();

export default {
  corsOrigin: "http://localhost:3000",
  port: 4000,
  host: "localhost",
  mongodburi: process.env.MONGO_URI,
};
