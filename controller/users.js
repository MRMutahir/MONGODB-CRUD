import {User} from "../model/model.js"
import bcrypt from "bcrypt"
async function updateuser(req,res) {
 if(req.body.userid === req.params.id || req.body.isAdmin){
    if(req.body.password ){
       try {
        let salt =  await bcrypt.genSalt(10)
        req.body.password = bcrypt.hash(req.body.password , salt)
        res.send(salt)
       } catch (error) {
        res.status(500).json(error)
       }
    }
    try {
        let user =  await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        })
        res.status(200).json("Account has been updated",user);

     } catch (error) {
        res.status(500).json(error)
        
     }
 }
 else{
    res.send("id nh hen")
    return res.status(403).json("You can update only your account!");
 }



}
export {updateuser}