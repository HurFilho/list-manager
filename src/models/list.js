const mongoose = require('mongoose');
const ItemSchema = require('./item');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    items: {
        type: [ItemSchema],
        required: true
    }
});

module.exports = mongoose.model('List', ListSchema); // export the new scheme and the collection name