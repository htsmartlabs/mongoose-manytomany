const express = require('express');
const router = express.Router();

const Student = require('../model/student.model');

router.get('/',(req,res,next)=>{
    Student.find()
    .exec()
    .then(data=>{
        res.send(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
    const student = new Student({
        name: req.body.name
    });
    student.save()
    .then(data =>{
        res.json({ status : true , message : "Student Added Successfully" });
    })
    .catch(next);
});

module.exports = router;