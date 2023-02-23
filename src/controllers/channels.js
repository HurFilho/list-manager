const { v4: uuidv4 } = require('uuid');
const Team = require('../models/team.js');
const response = require('../assets/channels.js');

exports.getChannels = (req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json(response);
};

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
            res.status(201).json({
                message: 'Channel added successfully!',
            });
        })
        .catch(err => console.log('err', err));
};
