const express = require("express");
const errorHandler = require("../../middleware/error");
const authHandler = require("../../middleware/auth");
const User = require("../../models/user");
const { generateAuthToken, verifyAuthToken } = require("../../utils/helpers");
const createUserSchema = require("./validationSchema");

const router = express.Router();

router.get(
  "/", errorHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
  })
);

// router.get(
//   "/:userId",
//   authHandler,
//   errorHandler(async (req, res) => {
//     const user = await User.findOne({ _id: req.params.userId });

//     res.status(200).send(user);
//   })
// );

router.get(
  "/profile",
  authHandler,
  errorHandler(async (req, res) => {
    const token = req.headers.token;
    const decryptedToken = verifyAuthToken(token);
    console.log(decryptedToken);
    const user = await User.findOne({ _id: decryptedToken.id });

    res.status(200).send(user);
  })
);

router.patch(
  "/profile",
  authHandler,
  errorHandler(async (req, res) => {
    const token = req.headers.token;
    const decryptedToken = verifyAuthToken(token);

    // JOI Validation
    const payload = req.body;
    const { error } = createUserSchema(payload);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Finding user through token and updating
    const user = await User.findByIdAndUpdate(decryptedToken.id, payload);

    res
      .status(200)
      .send({ message: `Profile of ${user.name} updated Successfully!` });
  })
);

router.delete(
  "/profile",
  authHandler,
  errorHandler(async (req, res) => {
    const token = req.headers.token;
    const decryptedToken = verifyAuthToken(token);

    // Finding user through token and deleting
    const user = await User.findByIdAndDelete(decryptedToken.id);

    res
      .status(200)
      .send({ message: `Profile of ${user.name} deleted Successfully!` });
  })
);

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send({ message: "Invalid Email or Password" });
  }

  if (req.body.password !== "rizwan") {
    return res.status(400).send({ message: "Invalid Email or Password" });
  }

  const token = generateAuthToken({
    name: user.name,
    email: user.email,
    id: user._id,
  });

  res.status(200).send({ message: "success", token });
});

router.post("/signup", async (req, res) => {
  const payload = req.body;
  const { error } = createUserSchema(payload);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  let user = new User(payload);

  user = await user.save();
  res.status(200).send({ user });
});

module.exports = router;
