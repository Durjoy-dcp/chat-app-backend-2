const mongoose = require("mongoose");
const connnectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.URI);
    console.log("Mongodb connected ", connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connnectdb;
