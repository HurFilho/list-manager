const response = require('../assets/channels.js');

exports.getChannels = (req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json(response);
};