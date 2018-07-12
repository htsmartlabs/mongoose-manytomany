const mongoose = require('../config/database.config');
//const subject = require('./subject.model');

const studentSchema = mongoose.Schema({
    name:{type:String},
    subjects:[{
        type: mongoose.Schema.Types.ObjectId,
       ref:'subject'
    }]
});

const studentModel = mongoose.model('student',studentSchema);

module.exports = studentModel;