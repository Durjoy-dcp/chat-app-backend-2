const express = require("express");
const app = express();
require("dotenv").config();
let cors = require("cors");
app.use(cors());
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("working");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
