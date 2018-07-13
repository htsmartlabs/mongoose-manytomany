const mongoose = require('../config/database.config');

const bookSchema = mongoose.Schema({
    name:{type:String}
});

const bookModel = mongoose.model('book',bookSchema);

module.exports = bookModel;