const model = require('../model');

module.exports = {
  getAllUsers: (req, res) => {
    model.users.getAllUsers()
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  getUserByName: (req, res) => {
    const {username} = req.params;
    model.users.getUserByName(username)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  getUserById: (req, res) => {
    const {userID} = req.params;
    model.users.getUserByID(userID)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },

  createUser: (req, res) => {
    const {id, username, user_email} = req.body;
    console.log("id", id)
    console.log("username", username)
    console.log("user_email", user_email)
    model.users.createUser([id, username, user_email])
    .then(res.status(200).send(`create a new user with id: ${id}, username: ${username}, user_email: ${user_email}`))
    .catch((err) => { res.status(404).send(err); });
  }
};

// insert into "users" (id, username, user_email) values ($1, $2, $3)