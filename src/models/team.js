const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    channels: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema); // export the new scheme and the collection name