const express = require('express');
const bodyParser = require('body-parser');

const student = require('./routes/student.controller');
const subject = require('./routes/subject.controller');
const book = require('./routes/book.controller');

const app = express();

app.use(bodyParser.json());

app.use('/student',student);
app.use('/subject',subject);
app.use('/book',book);

app.listen(3000,()=>{
    console.log('Node server started');
});