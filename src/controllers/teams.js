const { v4: uuidv4 } = require('uuid');
const Team = require('../models/team');
const createResponse = require('../middlewares/responseHandlers');
const headers = require('../middlewares/headers');


exports.getTeams = (_, res) => {
    Team.find()
        .then(teams => createResponse.handleGetTeams({ res, teams }))
        .catch(err => createResponse.handleGetTeams({ err }))
};

exports.createTeam = (req, res, next) => {
    const { channels, name } = req.body;
    const _id = uuidv4();
    const team = new Team({
        channels,
        _id,
        name
    });
    team.save()
        .then(teamSaved => {
            res.set(headers.createHeaders());
            res.status(201).json({
                message: 'Team created successfully!',
                team: teamSaved
            });
        })
};

exports.deleteTeam = (req, res, next) => {
    const { teamId } = req.body;
    Team.deleteOne(
        { _id: teamId })
        .then(() => {
            res.status(201)
            res.set(headers.createHeaders());
            res.json({ message: 'Team deleted successfully!', });
        })
        .catch(err => console.log('err', err));
};