const express = require('express');

const router = express.Router();

const apiController = require('../controllers/channels');

router.get('/', apiController.getHome);

router.get('/channels', apiController.getChannels);

module.exports = router;