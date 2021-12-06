const model = require('../model');

module.exports = {
  getAppointment: (req, res) => {
    const {doctor_id, date_time} = req.params
    model.appointment.getAppointment(doctor_id, date_time)
    .then((result) => res.status(200).send(result.rows))
    .catch((err) => { res.status(404).send(err); });
  },
  deleteAppointment: (req, res) => {
    const {appointment_id, doctor_id} = req.params;
    console.log(req.params)
    model.appointment.deleteAppointment(appointment_id, doctor_id)
    .then(res.status(200).send(`delete appointment with appointment_id: ${appointment_id}`))
    .catch((err) => { res.status(404).send(err); });
  }
};