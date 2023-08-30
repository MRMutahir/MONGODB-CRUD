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

// async function homepage(req, res) {
//   res.send("<h1>SALAM</h1>");
// }
// async function homepage(req, res) {
//   res.send("<h1>SALAM</h1>");
// }
export { createpost, update };
