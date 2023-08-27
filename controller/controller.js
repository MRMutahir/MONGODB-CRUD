import { User } from "../model/model.js";
import bcrypt from "bcrypt";

async function home(req, res) {
  res.send("<h1>SALAM! wel come to home page</h1>");
}

async function register(req, res) {
  console.log("SALAM post");
  // res.send("SALAM GET");
  // create new  passwod
  let salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(req.body.password, salt);
  // console.log(hashpassword,"<<<<<<<<<<hashpassword");
  try {
    // create new users
    const newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: hashpassword, // Make sure password is a string
    });
    //  save new users
    let user = await newUser.save();
    // console.log(user);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
}
async function login(req, res) {
  console.log("Login ho  fooo chl  rahahen ");

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json("User not found");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json("Wrong Password");
    }
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }

  // try {
  //   let user = await User.findOne({ email: req.body.email });
  //   !user && res.status(404).json("User email not found");
  //   const validPassword = await bcrypt.compare(req.body.password, user.password)
  //   if(!validPassword){
  //             res.status(400).json("Wrong Password")
  //         }
  //     console.log(validPassword);
  //     if(!validPassword){
  //         res.status(400).json("Wrong Password")
  //     }
  // res.status(404).json("user correct wellcome ")
  // let validpassword = await bcrypt.compare(req.body.password, user.password);
  // !validpassword && res.status(400).json("password incorrect");

  //   res.status(200).json(user);
  // } catch (error) {
  //   console.log(error);
  // }
}

export { register, home, login };
