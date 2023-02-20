exports.getHome = (req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send('API do Gerenciador de tarefas rodando 🥳')
};