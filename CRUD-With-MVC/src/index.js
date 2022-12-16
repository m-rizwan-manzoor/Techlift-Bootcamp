const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const userRouter = require("./routes/user/user.controller");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/stayproductive")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/users", userRouter);

app.listen(5000, () => console.log("App is listening at port 5000"));
