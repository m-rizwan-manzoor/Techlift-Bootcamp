const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user/user.controller");
const productRouter = require("./routes/product/product.controller");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/mystore")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(5000, () => console.log("App is listening at port 5000"));
