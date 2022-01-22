import express, { Request, Response, NextFunction } from "express";
import config from "config";
import { version } from "../package.json";
import connectDB from "./db/mongoose";
import wordRoutes from "./routes/wordRoutes";

connectDB();

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/*

function isAccessGranted (req, res, next) {
  // Here your authorization logic (jwt, OAuth, custom connection logic...)
  if (!isGranted) return res.status(401).end()
  next()
}
*/

app.use("/api/dictionary", wordRoutes);

const host = "0.0.0.0";

app.listen(process.env.PORT || port, () => {
  console.log(`🚀 Server version ${version} is listening 🚀`);
  console.log(`http://${host}:${port}`);
});
