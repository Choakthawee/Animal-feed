const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); //ตอน post ต้องใช้ email=ASASD&password=asdsad ไม่ใช้ที่ ต้องค่าเป็น appcation/json ที่ต้องส่ง  post เป็น json

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'embed'
});

connection.connect((err) => {
  if (err) {
    console.error('ไม่สามารถเชื่อมต่อกับ MySQL: ' + err.stack);
    return;
  }
  console.log('เชื่อมต่อกับ MySQL สำเร็จ');
});

app.listen(3000, () => {
  console.log('Server เริ่มต้นที่พอร์ต 3000');
});

app.get('/data', (req, res) => {
  connection.query('SELECT * FROM status', (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    }
    res.json(rows);
  });
});

app.post("/distance", (req, res) => {
  let valuedistance = req.body.value;
  console.log(valuedistance)
  connection.query('UPDATE status SET distance = ? WHERE id= 1',[valuedistance], (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    }
    res.status(200).json({"msg":"susess","update":rows});
  });
});