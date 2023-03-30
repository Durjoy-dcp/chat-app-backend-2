const mongoose = require("mongoose");
const chatModels = mongoose.Schema(
  {
    chatName: {
      type: string,
      trim: true,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
    lastmsg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Msg",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModels);
module.exports = Chat;
