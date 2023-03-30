const express = require("express");
const app = express();
require("dotenv").config();
let cors = require("cors");
const connnectdb = require("./config/db");
app.use(cors());
const port = process.env.PORT || 4000;

connnectdb();
app.get("/", (req, res) => {
  res.send("working");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
