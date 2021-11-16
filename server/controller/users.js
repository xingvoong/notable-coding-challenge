const model = require('../model');

module.exports = {
  getAllUsers: (req, res) => {
    model.users.getAllUsers()
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },
  // getOneUser: (req, res) => {
  //   const {username} = req.params;
  //   model.users.getOneUser(username)
  //   .then((result) => res.status(200).send(result.rows))
  //   .catch((err) => { res.status(404).send(err); });
  // },

  getUserById: (req, res) => {
    const {userID} = req.params;
    console.log("hello?")
    model.users.getUserByID(userID)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  }
};