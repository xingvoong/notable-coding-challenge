const pool = require('../db');

const getAllUsers = async () => {
  const query = 'select * from users'
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
  getAllUsers
};