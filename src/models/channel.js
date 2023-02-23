const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = ChannelSchema;