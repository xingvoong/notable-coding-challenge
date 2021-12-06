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

module.exports = {
  getAppointment, deleteAppointment
}