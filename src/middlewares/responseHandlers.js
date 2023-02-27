const headers = require('./headers');
const responses = require('./responses');
const errors = require('./errors');

exports.handleGetTeams = ({ res, teams, err }) => {
    if (err) {
        errors.getTeamError(err);
    }
    else {
        res.set(headers.createHeaders());
        res.json(responses.getTeamResponse(teams));
    }
}