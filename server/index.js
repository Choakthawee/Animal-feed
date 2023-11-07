const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const moment = require('moment-timezone');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); //ตอน post ต้องใช้ email=ASASD&password=asdsad ไม่ใช้ที่ ต้องค่าเป็น appcation/json ที่ต้องส่ง  post เป็น json
let servoType = 0
let servoValue = 0
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

app.listen(3001, () => {
  console.log('Server เริ่มต้นที่พอร์ต 3001');
});

app.get('/status', (req, res) => {
  connection.query('SELECT * FROM status WHERE id = 1', (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    } else {
      if (rows.length > 0) { // ตรวจสอบว่ามีข้อมูลที่ถูกดึงมาหรือไม่
        // console.log(rows);
        const dataToSend = { rows: rows, v: servoValue };
        res.status(200).json(dataToSend);
      } else {
        res.status(404).send('ไม่พบข้อมูล');
      }
    }
  });
  
});

app.get('/date_time', (req, res) => {
  connection.query('SELECT * FROM date_time', (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    } else {
      if (rows.length > 0) { // ตรวจสอบว่ามีข้อมูลที่ถูกดึงมาหรือไม่
        console.log(rows);
        
        res.status(200).json(rows);
      } else {
        res.status(404).send('ไม่พบข้อมูล');
      }
    }
  });
});

const report_time = () => {
  const currentDate = moment().tz('Asia/Bangkok').format('YYYY-MM-DD');
  const currentTime = moment().tz('Asia/Bangkok').format('HH:mm:ss');
  console.log( currentDate.toString() )
  connection.query('INSERT INTO date_time (date, time) VALUES (?, ?)', [currentDate, currentTime], (err, rows) => {
    if (err) {
      console.error('ไม่สามารถเพิ่มข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการเพิ่มข้อมูล');
      return;
    }
  });
};


app.post("/distance", (req, res) => {
  let valuedistance = req.body.value;
  connection.query('UPDATE status SET distance = ? WHERE id= 1',[valuedistance], (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    }
    res.status(200).json({"msg":"susess","update":rows});
  });
});

app.post("/tempereture", (req, res) => {
  let valuetem = req.body.value;
  connection.query('UPDATE status SET temperature = ? WHERE id= 1',[valuetem], (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    }
    res.status(200).json({"msg":"susess","update":rows});
  });
});

app.post("/pir", (req, res) => {
  let valuepir = req.body.value;
  connection.query('UPDATE status SET pir = ? WHERE id= 1',[valuepir], (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    }
    res.status(200).json({"msg":"susess","update":rows});
  });
});


app.post("/setmodeservo", (req, res) => {
  servoType= req.body.type;
  servoValue= req.body.value;
  if (servoValue==0){
     report_time();
  }
  res.json({
    "type":servoType,
    "v":servoValue
  })
});

app.get("/checkservo", (req, res) => {
  res.status(200).send(servoType.toString()+servoValue.toString())
});

app.post("/servoauto", (req, res) => {
  let valueservoauto = req.body.value;
  console.log(valueservoauto)
  connection.query('UPDATE status SET servoauto = ? WHERE id= 1',[valueservoauto], (err, rows) => {
    if (err) {
      console.error('ไม่สามารถดึงข้อมูล: ' + err);
      res.status(500).send('มีปัญหาในการดึงข้อมูล');
      return;
    }
    res.status(200).json({"msg":"susess","update":rows});
  });
});

