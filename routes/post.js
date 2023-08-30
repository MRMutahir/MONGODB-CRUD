import express from "express";
import { createpost, update } from "../controller/post.js";
let postroute = express.Router();

postroute.post("/createpost", createpost);
postroute.put("/update/:id", update);
export { postroute, update };
