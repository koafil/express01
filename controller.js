import mysql from 'mysql2';

const config = {
  host: '192.168.50.2',
  user: 'test1',
  password: 'testsql',
  database: 'api'
};
const pool = mysql.createPool(config).promise();

class Controller {
  async getAll(req, res) {
    try {
      let conn = await pool.getConnection();
      let [rows, fields] = await conn.query('SELECT * FROM users');
      conn.release();
      res.status(200).send(rows);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new Controller;