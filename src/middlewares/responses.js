exports.getTeamResponse = (teams) => {
    const response = {
        message: teams.length ? `All teams` : "No team was found",
        quantity: teams.length,
        empty: !teams.length,
    };
    if (teams.length) { response.teams = teams };
    return response;
}