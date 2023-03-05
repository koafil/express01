import pool from './db.js';

class Service {
  async getAll() {
    let [rows, fields] = await pool.execute('SELECT * FROM users');
    return rows;
  }

  async getOne(id) {
    if (!id) throw new Error("Не указан id");
    let [rows, fields] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows;
  }
}

export default new Service();