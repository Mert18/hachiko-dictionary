import express from "express";
import { createServer } from "http";
import config from "config";
import logger from "./utils/logger";
import { version } from "../package.json";
import connectDB from "./db/mongoose";
import wordRoutes from "./routes/wordRoutes";

connectDB();

const port = config.get<number>("port");
const host = config.get<string>("host");

const app = express();

app.use(express.json());

app.use("/api/dictionary", wordRoutes);

const httpServer = createServer(app);

app.get("/", (_, res) =>
  res.send(`Server is up and running version ${version}`)
);

httpServer.listen(port, host, () => {
  logger.info(`🚀 Server version ${version} is listening 🚀`);
  logger.info(`http://${host}:${port}`);
});
