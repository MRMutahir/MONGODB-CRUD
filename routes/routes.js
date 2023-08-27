import express from "express";
import { register } from "../controller/controller.js";
// import { User } from "../model/model.js";

let router = express.Router();
// console.log(app);
// router.get("/", home);
router.get("/register", register);

export { router };
