const model = require('../model');

module.exports = {
  getAppointment: (req, res) => {
    const {doctor_id, date_time} = req.params
    model.appointment.getAppointment(doctor_id, date_time)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  }
};