import { User } from "../model/model";
import express, { Router } from "express"
let user_router  =   express.Router();
user_router.put("/abc",(req,res)=>{
    res.send("INSHALLAH ab bnega user")
})