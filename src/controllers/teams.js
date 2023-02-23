const Team = require('../models/team')

exports.createTeam = (req, res, next) => {
    const { name } = req.body;
    const { channels } = req.body;
    const team = new Team({
        name,
        channels
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