// import { postroute } from "./routes/post.js";
import { post } from "../model/post.js";

async function createpost(req, res) {
  if (!req.body.desc) return res.send(" description not add");
  const newpost = new post(req.body);
  try {
    let savepost = await newpost.save();
    res.status(200).json(savepost);
  } catch (error) {
    res.status(500).send(error);
  }
}
async function update(req, res) {
  // console.log(req.params.id);
  try {
    const id = await post.findById(req.params.id);
    if (id.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}



async function deleted(req, res) {
  // console.log(req.params.id);
  try {
    const id = await post.findById(req.params.id);
    if (id.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been deleted");
    } else {
      res.status(403).json("you can deleted only your post");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function like(req, res) {
  // res.send("<h1>SALAM</h1>");
  try {
    const id = await post.findById(req.params.id)
    if (!id.Like.includes(req.body.userId)) {
      await post.updateOne({ $push: { Like: req.body.userId } })
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { Like: req.body.userId } })
      res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).send(error);

  }
}
async function getuser(req, res) {
 try {
  const  user = await post.findById(req.params.id)
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json(error);
 }
}

async  function timeline(req,res) {
  // res.send("SALAM timeline")
 
  try {
    const  user = await post.findById(req.body.userId);
    const  curntuser = await post.find({userId: curntuser._id})
    const friend =  await Promise.all(curntuser.followings.map(friendid => post.find({userId:friendid})))
    res.json(curntuser.concat(...friend))
  } catch (error) {
  res.status(500).json(error);
    
  }
  
}
export { createpost, update, deleted, like,getuser ,timeline};
