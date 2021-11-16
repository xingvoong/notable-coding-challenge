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
};

const getUserByName = async (username) => {

  const value = [username]
  const client = await pool.connect();
  const query = 'select * from users where username = $1';

  try {
    return await client.query(query, value);
  } catch (err) {
    return err
  } finally {
    client.release();
  }
};

const getUserByID = async (userID) => {

  const value = [userID]
  const client = await pool.connect();
  const query = 'select * from users where id = $1';

  try {
    return await client.query(query, value);
  } catch (err) {
    return err
  } finally {
    client.release();
  }
};

module.exports = {
  getAllUsers, getUserByID, getUserByName
};