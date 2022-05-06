const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

const cors = require('cors');

const mysql = require('mysql2/promise'); // or require('mysql2').createConnectionPromise
const { request } = require('http');

app.use(cors());

const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body;
  // users.push(user);
  console.log("req", user);
  res.json("user login");
});

app.get('/getGrades', (req, res) => {
  res.json("user login");
});

app.post('/api/authenticate', (req, res) => {
  try {
    let user = req.body;
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query(`select * from user where phone = ${user.phone} and password = '${user.password}'`);
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.get('/getGrades', (req, res) => {
  res.json("user login");
});

app.post('/api/addUser', (req, res) => {
  const user = req.body;
  // users.push(user);
  console.log("req", user);
  res.json("user added");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

app.get('/api/get-grade', (req, res) => {
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query('select * from grade');
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/api/get-role', (req, res) => {
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query('select * from role');
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/api/get-subject', (req, res) => {
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query('select * from subject');
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/api/get-tutor', (req, res) => {
  try {
    let tutorDetail = req.query;
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query(`select u.user_id, u.phone, u.first_name, u.last_name, ugs.grade,ugs.subject_name
        from user u, user_grade_subject ugs
           where  u.user_id = ugs.user_id and u.role_id= 3 and ugs.grade =${tutorDetail.grade} and ugs.subject_name ='${tutorDetail.subject_name}' and
                  u.city = '${tutorDetail.city}'`);
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.post("/api/insert-user-grade-subjects", (req, res) => {
  console.log(req.body)
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        conn.query(`insert into user_grade_subjects (user_id, grade,subject_name,enroll_date) VALUES (?,?,?,?)`,
          [req.body.user_id, req.body.grade, req.body.subject_name, req.body.enroll_date],
          (error, results) => {
            if (error)
              return res.json({ error: error });
            else
              return true;
          });
        conn.end();
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.post("/api/insert-user-detail", (req, res) => {
  console.log(req.body);
  let userSubject = req.body.gradeSubjects;
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        conn.query(`insert into user (phone, password, first_name, last_name, email, address_line1, address_line2, city, state, zipcode, role_id)
      VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
          [req.body.phoneNumber, req.body.password, req.body.firstName, req.body.lastName, req.body.email, req.body.addressLine1, req.body.addressLine2, req.body.city, req.body.state, req.body.zipcode, req.body.role],
          (error, results) => {
            if (error)
              return res.json({ error: error });
            else
              return true;
          });
        conn.end();
        selectUser();
      });

    //let userid = req.body.phoneNumber;
    let userid;
    function selectUser(){
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query(`select user_id from user where phone = ${req.body.phoneNumber}`);
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log("ROWS:" + rows);
        rows.forEach(element => {
          console.log(element);
          console.log(element.user_id);
          rows = element.user_id;
          //break;
        });
        userid = rows;
        res.json(rows);
        userSubject.map(insertUserGradeSubject);
      });
    };

    let currDate = new Date();

    //userSubject.map(insertUserGradeSubject);
    function insertUserGradeSubject(item) {
      return mysql.createConnection({
        host: 'remotemysql.com',
        port: 3306,
        user: 'svQtxIxilZ',
        database: 'svQtxIxilZ',
        password: 'Z5uzX9DkGm',
      })
        .then(conn => {
          conn.query(`insert into user_grade_subject (user_id, grade,subject_name,enroll_date) VALUES (?,?,?,?)`,
            [userid, item.grade, item.subject, currDate],
            (error, results) => {
              if (error)
                return res.json({ error: error });
              else
                return true;
            });
          conn.end();
        });
    }
    return true;
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.get('/api/get-schedules', (req, res) => {
  try {
    let tutorDetail = req.query;
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        let result = conn.query(`select start_date,end_date,fee from tution_schedule where
        tutor_user_id = '${tutorDetail.tutor_user_id}' and
        tutor_grade = ${tutorDetail.tutor_grade} and
        tutor_subject_name = '${tutorDetail.tutor_subject_name}'`);
        conn.end();
        return result;
      })
      .then(([rows, fields]) => {
        console.log(rows);
        res.json(rows);
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});

app.post("/api/insert-schedule-enroll", (req, res) => {
  console.log(req.body)
  try {
    mysql.createConnection({
      host: 'remotemysql.com',
      port: 3306,
      user: 'svQtxIxilZ',
      database: 'svQtxIxilZ',
      password: 'Z5uzX9DkGm',
    })
      .then(conn => {
        conn.query(`insert into tution_schedule_enrollment (schedule_id, student_user_id, enroll_date) VALUES (?,?,?)`,
          [req.body.schedule_id, req.body.student_user_id, req.body.enroll_date],
          (error, results) => {
            if (error)
              return res.json({ error: error });
            else
              return true;
          });
        conn.end();
      });
  }
  catch (err) {
    console.log("ERROR");
    res.json(err);
  }
});
