const mongoose = require('mongoose');
const ChannelSchema = require('./channel');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    channels: {
        type: [ChannelSchema],
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema); // export the new scheme and the collection name