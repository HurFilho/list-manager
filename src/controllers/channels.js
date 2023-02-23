const { v4: uuidv4 } = require('uuid');
const Team = require('../models/team.js');

exports.createChannel = (req, res, next) => {
    const { name, teamId } = req.body;
    const _id = uuidv4();
    const channel = {
        _id,
        name
    };
    Team.findOneAndUpdate(
        { _id: teamId }, { $push: { channels: channel } },)
        .then(() => {
            res.status(201)
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
            res.json({ message: 'Channel added successfully!', });
        })
        .catch(err => console.log('err', err));
};

exports.deleteChannel = (req, res, next) => {
    const { teamId, channelId } = req.body;
    Team.findOneAndUpdate(
        { _id: teamId }, { $pull: { channels: { _id: channelId } } },)
        .then(() => {
            res.status(201)
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
            res.json({ message: 'Channel deleted successfully!', });
        })
        .catch(err => console.log('err', err));
};
