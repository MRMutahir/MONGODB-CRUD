// import { User } from "../model/model";
import express, { Router } from "express"
import {updateuser} from "../controller/users.js"


let userRoute  =  express.Router();


userRoute.put("/:id",updateuser)

export{userRoute}