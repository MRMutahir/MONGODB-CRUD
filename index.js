console.log("SALAM");
import express, { Router } from "express";
import { MongoClient } from "mongodb";
import { router } from "./routes/routes.js";
import { userRoute } from "./routes/users.js";
import morgan from "morgan";
import helmet from "helmet";
import { User } from "./model/model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { postroute } from "./routes/post.js";
// import {home} from "./controller/controller.js"

dotenv.config();
const app = express();
const port = 8080;
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
mongoose
  .connect(process.env.MONGO_URL)
  // it is code when db is connected
  .then(() => {
    // middle ware
    console.log("Successfully connected to DB");
    app.use("/socialmedia/auth", router);
    app.use("/socialmedia/user", userRoute);
    app.use("/socialmedia/post", postroute);
    app.listen(port, () => {
      console.log(`Port is running on port number ${port}`);
    });
  })

  // it is code when db has error in connection
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });
