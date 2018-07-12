const express = require('express');
const bodyParser = require('body-parser');

const student = require('./routes/student.controller');
const subject = require('./routes/subject.controller');

const app = express();

app.use(bodyParser.json());

app.use('/student',student);
app.use('/subject',subject);

app.listen(3000,()=>{
    console.log('Node server started');
});