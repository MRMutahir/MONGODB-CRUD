import express from "express";
import { createpost, update,deleted ,like,getuser,timeline} from "../controller/post.js";
let postroute = express.Router();

postroute.post("/createpost", createpost);
postroute.put("/update/:id", update);
postroute.delete("/delete/:id", deleted);
postroute.put("/like/:id", like);
postroute.get("/getuser/:id", getuser);
postroute.get("/timeline/all", timeline);
export { postroute, update ,like,deleted,getuser,timeline};
