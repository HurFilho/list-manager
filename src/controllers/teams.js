const Team = require('../models/team');
const { v4: uuidv4 } = require('uuid');

exports.createTeam = (req, res, next) => {
    const { channels, name } = req.body;
    const _id = uuidv4();
    const team = new Team({
        channels,
        _id,
        name
    });
    team
        .save()
        .then(teamSaved => {
            res.status(201).json({
                message: 'Team created successfully!',
                team: teamSaved
            });
        })
        .catch(err => console.log('err', err));
};

exports.getTeam = (req, res, next) => {
    Team.find().then(teams => {
        res.json({
            message: "All teams",
            teams
        });
    });
};