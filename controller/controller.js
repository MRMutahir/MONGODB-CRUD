import { User } from "../model/model.js";

async function register(req, res) {
  console.log("SALAM post");
  res.send("SALAM GET");
  try {
    const newUser = new User({
      name: "Muhammad Mutahir",
      email: "email@gmail.com",
      password: "123456", // Make sure password is a string
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
}

export { register };
