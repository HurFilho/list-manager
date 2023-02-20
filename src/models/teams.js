const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    channels: {
        type: Array,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Channel', teamSchema);