import { User } from "../model/model.js";
import bcrypt from "bcrypt";
async function updateuser(req, res) {
  //  console.log( typeof req.params.id);
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
}

async function deletefoo(req, res) {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      let user = await User.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json("Account has been delete");
    } catch (error) {
      return res.status(error).json("You can delete only your account!");
    }
  } else {
    return res.status(403).json("You can delete only your account!");
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const { updatedAt, password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(500).json(` "this user is not find"${error}`);
  }
}

async function follow(req, res) {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const cuurentUser = await User.findById(req.body.id);
      // console.log(user);
      // res.json(cuurentUser);
      // res.json(user);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await cuurentUser.updateOne({
          $push: { followings: req.params.id },
        });
        res.status(200).send("user has been follow");
      } else {
        res.status(403).json("you allready follow this user");
      }

      if (condition) {
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
}

export { updateuser, deletefoo, getUser, follow };
