const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/doctors', controller.doctors.getAllDoctors);

router.get('/doctorappoinment/:doctor_id/:date_time', controller.appointment.getAppointment);

router.get('/appointment/delete/:appointment_id/:doctor_id', controller.appointment.deleteAppointment);

router.post('/appointment', controller.appointment.postAppointment);

module.exports = router;