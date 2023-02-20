const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Channel', channelSchema);