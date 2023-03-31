const mongoose = require("mongoose");
const UserModels = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,

      default: "https://i.ibb.co/sWgFNk2/2023-03-27-15-43.png",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserModels);
module.exports = User;
