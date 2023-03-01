const mongoose = require('mongoose');
const ItemSchema = require('./item');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    channels: {
        type: [ItemSchema],
        required: true
    }
});

module.exports = mongoose.model('List', listSchema); // export the new scheme and the collection name