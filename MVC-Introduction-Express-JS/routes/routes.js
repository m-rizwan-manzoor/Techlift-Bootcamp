const express = require("express");

// const signupController = require("../controllers/signup.controller");
// const loginController = require("../controllers/login.controller");
const UsersController = require("../controllers/users.controller");
const PostsController = require("../controllers/posts.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

// router.post("/signup", signupController);
// router.post("/login", loginController);

router.get("/users", UsersController.getUsers);
router.post("/users", UsersController.createUser);
router.put("/users/:id", UsersController.updateUser)
router.delete("/users/:id", UsersController.deleteUser)

router.get("/posts", PostsController.getPosts);
router.post("/posts", PostsController.createPost);


// router.get("/posts/:id", getUserPostsController);
// router.post("/posts/:id", getUserPostsController);

module.exports = router;
