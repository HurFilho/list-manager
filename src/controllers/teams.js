const Team = require('../models/teams')

exports.createTeam = (req, res, next) => {
    const { name } = req.body;
    const { channels } = req.body;
    const team = new Team({
        id: new Date().toISOString(),
        name: name,
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
    Team.find().then(foundTeams => {
        res.json({
            message: "All teams",
            posts: foundTeams
        });
    });
};
