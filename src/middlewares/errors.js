exports.getTeamError = (err) => {
    return {
        message: `An error ocurred: ${err}`,
        empty: true,
    }
};

exports.getListError = (err) => {
    return {
        message: `An error ocurred: ${err}`,
        empty: true,
    }
};
