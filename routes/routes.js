import  express  from "express";
import {home} from "../controller/controller.js"
let router = express.Router()
// console.log(app);
router.get('/',home)



export  {router}