const pool = require('../db');

const getAppointment = async (doctor_id, date_time) => {
  const values = [doctor_id, date_time]
  const query = 'select * from appointment where doctor_id = $1 and date_time = $2';
  console.log(query)
  console.log(values)
  const client = await pool.connect();

  try {
    return await client.query(query, values);
  } catch (err) {
    return err;
  } finally {
    client.release();
  }
}

const deleteAppointment = async (appointment_id, doctor_id) => {
  const values = [appointment_id, doctor_id]
  const client = await pool.connect()
  const query = 'delete from appointment where id = $1 and doctor_id = $2';
  try {
    return await client.query(query, values);
  } catch (err) {
    return err
  } finally {
    client.release()
  }
}

const postAppointment = async(doctor_id, date, time) => {
  const params  = [doctor_id, date, time]

  const client = await pool.connect()
  const query = "select * from appointment where doctor_id = $1 and date = $2 and time = $3";

  try {
    return await client.query(query, params);
  } catch (err) {
    return err
  } finally {
    client.release()
  }
}

const postHelper = async(id, doctor_id, patient_first_name, patient_last_name, date, time, kind) => {
  const params = [id, doctor_id, patient_first_name, patient_last_name, date, time, kind]
  const client = await pool.connect()
  const query = "insert into appointment (id, doctor_id, patient_first_name, patient_last_name, date, time, kind) values ($1, $2, $3, $4, $5, $6, $7)";

  try {
    return await client.query(query, params);
  } catch (err) {
    return err
  } finally {
    client.release()
  }

  // insert into "appointment" (id, doctor_id, patient_first_name, patient_last_name, date, time, kind) values (2, 1, 'jane', 'doe', '2021-11-25', '9:00:00', 'Follow-Up');
}

module.exports = {
  getAppointment, deleteAppointment, postAppointment, postHelper
}