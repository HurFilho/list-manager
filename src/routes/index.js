const express = require('express');

const router = express.Router();

const response = require('../assets/channels.js');

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    res.send('API do Gerenciador de tarefas rodando 🥳')
});

router.get('/api/channels', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
});

module.exports = router;