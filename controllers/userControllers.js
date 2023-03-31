const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  console.log(name, email, password, pic);
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill up all the field ");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Give a unique email ");
  }
  const user = await User.create({
    email,
    name,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});
module.exports = { registerUser };
