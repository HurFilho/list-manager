const express = require('express');

const router = express.Router();

const response = require('../assets/channels.js');

router.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send('API do Gerenciador de tarefas rodando 🥳')
});

router.get('/api/channels', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json(response);
});

module.exports = router;