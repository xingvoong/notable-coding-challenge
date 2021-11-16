const model = require('../model');

module.exports = {
  get: (req, res) => {
    model.users.getAllUsers()
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  }
};