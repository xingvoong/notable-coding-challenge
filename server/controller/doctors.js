const model = require('../model');

module.exports = {
  getAllDoctors: (req, res) => {
    model.doctors.getAllDoctors()
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  }
};