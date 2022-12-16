const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/stayproductive")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  employeeID: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  password: String,
});

const User = mongoose.model("Users", userSchema);

app.post("/", (req, res) => {
  const employee = req.body;
  console.log(employee);
  const user = new User(employee);

  user
    .save()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
  //   res.status(200).send({ message: "Hello from Post endpoint" });
});

app.listen(5000, () => console.log("App is listening at port 5000"));
