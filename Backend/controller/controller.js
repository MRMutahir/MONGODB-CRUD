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
    await newUser.save();
    // console.log(user);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(`${error}  write a specific data . This data is already Use`);
  }
}
async function login(req, res) {
  try {
    console.log("Login ho  fooo chl  rahahen ");
    let user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("User email not found");
    // res.status(200).send(user);
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      // console.log("password wrong")
      res.status(400).json("password wrong");
    } else {
      console.log("Correct Password SALAM come User");
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }

  // console.log(validPassword === req.body.password);
}

export { register, home, login };
