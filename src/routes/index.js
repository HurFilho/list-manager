const express = require('express');

const router = express.Router();

const response = require('../assets/channels.js');

app.get('/', (req, res) => {
    res.send('API do Gerenciador de tarefas rodando 🥳')
})

router.get('/api/channels', (req, res, next) => {
    res.json(response);
});

module.exports = router;