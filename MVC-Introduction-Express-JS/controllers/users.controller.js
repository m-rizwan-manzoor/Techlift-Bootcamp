const users = require("../models/users.model");

function getUsers(req, res) {
  res.status(200).send(users);
}

function createUser(req, res) {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.send(user);
}

function updateUser(req, res) {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  console.log(user);
  if (!user) {
    res.status(404).send("banda available nahi hy.");
    return;
  }
  user.name = req.body.name;
  res.send(user);
}

function deleteUser(req, res) {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  console.log(user);
  if (!user) {
    res.status(404).send("banda available nahi hy.");
    return;
  }
  const index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
}

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
