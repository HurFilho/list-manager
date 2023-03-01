const { v4: uuidv4 } = require('uuid');
const Team = require('../models/team.js');
const headers = require('../middlewares/headers');

exports.createChannel = (req, res, next) => {
    const { name, teamId } = req.body;
    const _id = uuidv4();
    const channel = {
        _id,
        name
    };
    Team.findOneAndUpdate(
        { _id: teamId }, { $push: { channels: channel } },)
        .then((response) => {
            res.status(201)
            res.set(headers.createHeaders());
            res.json({ message: response ? 'Channel added successfully!' : 'Team not found!', });
        })
        .catch(err => console.log('err', err));
};

exports.deleteChannel = (req, res, next) => {
    const { teamId, channelId } = req.body;
    Team.findOneAndUpdate(
        { _id: teamId }, { $pull: { channels: { _id: channelId } } },)
        .then(() => {
            res.status(200)
            res.set(headers.createHeaders());
            res.json({ message: 'Channel deleted successfully!', });
        })
        .catch(err => console.log('err', err));
};
