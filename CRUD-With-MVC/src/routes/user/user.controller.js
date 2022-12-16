const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.get("/", async (req, res) => {
  const users = await User.find({});
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) res.status(404).send("No user found!");
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
