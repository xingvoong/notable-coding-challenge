const pool = require('../db');

const getAllDoctors = async () => {
  const query = 'select * from doctors'
  const client = await pool.connect();

  try {
    return await client.query(query);
  } catch (err) {
    return err;
  } finally {
    client.release();
  }
}

module.exports = {
  getAllDoctors
}