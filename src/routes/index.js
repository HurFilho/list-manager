const express = require('express');

const router = express.Router();

const response = require('../assets/channels.js');

router.get('/channels', (req, res, next) => {
    res.json(response);
});

router.get('/modengo', (req, res, next) => {
    res.json({ answer: "♥ !!! Eu amo modengo!!! ♥" });
});

module.exports = router;