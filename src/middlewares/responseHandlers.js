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
    };
};

exports.handleGetLists = ({ res, list, err }) => {
    if (err) {
        errors.getListError(err);
    }
    else {
        res.set(headers.createHeaders());
        res.json(responses.getListResponse(list));
    }
};