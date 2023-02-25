import express from 'express'
import mysql from 'mysql2';
const config = {
  host: '192.168.50.2',
  user: 'test1',
  password: 'testsql',
  database: 'api'
};
const pool = mysql.createPool(config).promise();

const PORT = 5000
const app = express()
app.use(express.json())
app.get('/',async (req,res)=>{
  try {
    let conn = await pool.getConnection();
    let [rows, fields] = await conn.query('SELECT * FROM tovars');
    conn.release();
    res.status(200).send(rows);
  }
  catch (e) { res.status(500).send(e);}

});
app.listen(PORT,()=>console.log('Server started on port: '+PORT))

