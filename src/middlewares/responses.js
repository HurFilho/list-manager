exports.getTeamResponse = (teams) => {
    const response = {
        message: teams.length ? `All teams` : "No team was found",
        quantity: teams.length,
        empty: !teams.length,
    };
    if (teams.length) { response.teams = teams };
    return response;
};

exports.getListResponse = (list) => {
    const response = {
        message: list?.length ? "All lists" : "No list was found",
        quantity: list?.length || 0,
        empty: !list?.length,
    };
    if (list?.length) { response.list = list };
    return response;
};