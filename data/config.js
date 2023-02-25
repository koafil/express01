// const mysql = require('mysql');
import mysql from 'mysql';
const config = {
  host: '192.168.50.2',
  user: 'test1',
  password: 'testsql',
  database: 'api'
};

const pool = mysql.createPool(config);
export default pool;
