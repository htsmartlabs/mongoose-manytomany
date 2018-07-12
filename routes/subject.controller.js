const express = require('express');
const router = express.Router();

const Subject = require('../model/subject.model');

router.get('/',(req,res,next)=>{
    Subject.find()
    .populate('students')
    .exec()
    .then(data=>{
        res.send(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
    const subject = new Subject({
        name: req.body.name,
        students:req.body.students
    });
    subject.save()
    .then(data =>{
        res.json({ status : true , message : "Subject Added Successfully" });
    })
    .catch(next);
});

module.exports = router;