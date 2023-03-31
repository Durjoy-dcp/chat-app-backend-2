const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
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
UserModels.methods.matchPassword = async function (givenPassword) {
  return await bcrypt.compare(givenPassword, this.password);
};
UserModels.pre("save", async function (next) {
  if (!this.isModified()) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model("User", UserModels);
module.exports = User;
