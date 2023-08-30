// import { User } from "../model/model";
import express, { Router } from "express";
import {
  updateuser,
  deletefoo,
  getUser,
  follow,
  unfollow,
 
} from "../controller/users.js";

let userRoute = express.Router();
userRoute.put("/:id", updateuser);
userRoute.delete("/:id", deletefoo);
userRoute.get("/:id", getUser);
userRoute.put("/:id/follow", follow);
userRoute.put("/:id/unfollow", unfollow);


export { userRoute };
