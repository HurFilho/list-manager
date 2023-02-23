const express = require('express');

const router = express.Router();

const apiController = require('../controllers/home');
const teamController = require('../controllers/teams');
const channelController = require('../controllers/channels');

router.get('/', apiController.getHome);

router.get('/channels', channelController.getChannels);

router.get('/teams', teamController.getTeam);

router.post('/teams', teamController.createTeam);

router.post('/channels', channelController.createChannel);

module.exports = router;