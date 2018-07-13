const express = require('express');
const router = express.Router();

const Book = require('../model/book.model');

router.get('/',(req,res,next)=>{
    Book.find()
    .exec()
    .then(data=>{
        res.send(data);
    })
    .catch(next);
});

router.post('/',(req,res,next)=>{
    const book = new Book({
        name: req.body.name
    });
    book.save()
    .then(data =>{
        res.json({ status : true , message : "Book Added Successfully" });
    })
    .catch(next);
});

module.exports = router;