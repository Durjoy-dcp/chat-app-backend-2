const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./Routers/userRouters");
let cors = require("cors");

const connnectdb = require("./config/db");
app.use(cors());
const port = process.env.PORT || 5000;

connnectdb();
app.use(express.json());
app.use("/api/user", userRouter);
// app.get("/", (req, res) => {
//   res.send("working");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
