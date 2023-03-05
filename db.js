import mysql from 'mysql2';

const pool = mysql.createPool({
  host: '192.168.50.2',
  user: 'test1',
  password: 'testsql',
  database: 'api'

}).promise();
export default pool;