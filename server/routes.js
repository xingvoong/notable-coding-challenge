const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/doctors', controller.doctors.getAllDoctors);
router.get('/doctorappoinment/:doctor_id/:date_time', controller.appointment.getAppointment);
router.get('/appoinment/delete/:appoinment_id', controller.appointment.deleteAppointment);

module.exports = router;