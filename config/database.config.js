const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/booktest',{ useNewUrlParser: true },err => {
    !err ? console.log('Mongodb connected') : console.log(err);
});

module.exports = mongoose;