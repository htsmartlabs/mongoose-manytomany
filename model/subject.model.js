const mongoose = require('../config/database.config');
//const student = require('./student.model');

const subjectSchema = mongoose.Schema({
    name:{type:String},
    students:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'student'
    }]
});

const subjectModel = mongoose.model('subject',subjectSchema);

module.exports = subjectModel;