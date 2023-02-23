const express = require('express');

const router = express.Router();

const apiController = require('../controllers/home');
const teamController = require('../controllers/teams');
const channelController = require('../controllers/channels');

router.get('/', apiController.getHome);

router.get('/teams', teamController.getTeam);

router.post('/teams', teamController.createTeam);

router.delete('/teams', teamController.deleteTeam);

router.post('/channel', channelController.createChannel);

router.delete('/channel', channelController.deleteChannel);

module.exports = router;