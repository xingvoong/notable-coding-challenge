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
    model.appointment.deleteAppointment(appointment_id, doctor_id)
    .then(res.status(200).send(`delete appointment with appointment_id: ${appointment_id}`))
    .catch((err) => { res.status(404).send(err); });
  },

  postAppointment:(req, res) => {
    const {id, doctor_id, patient_first_name, patient_last_name, date, time, kind} = req.body;

    model.appointment.postAppointment(doctor_id, date, time)
    .then((data) => {
      if (data.rows.length >= 3) {
        res.status(404).send('Doctor is fully booked')
      } else {
        if (time.slice(3, 5) % 15 === 0) {
          model.appointment.postHelper(id, doctor_id, patient_first_name, patient_last_name, date, time, kind)
          .then(res.status(200).send("Successed"))
        } else {
          res.status(404).send('Invalid time')
        }
      }
    })
    .catch((err) => { res.status(404).send(err); });
  }
};