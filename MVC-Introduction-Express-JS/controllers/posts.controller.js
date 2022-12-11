const posts = require("../models/posts.model");

function getPosts(req, res) {
  res.status(200).send(posts);
}

function createPost(req, res) {
  const post = {
    id: posts.length + 1,
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
  };
  posts.push(post);
  res.send(post);
}

module.exports = {
  getPosts: getPosts,
  createPost: createPost,
};
