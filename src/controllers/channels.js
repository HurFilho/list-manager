const response = require('../assets/channels.js');

exports.getHome = (req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.send('API do Gerenciador de tarefas rodando 🥳')
};

exports.getChannels = (req, res, next) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json(response);
};

//   exports.createPost = (req, res, next) => {
//     // get post's title and content from the request
//     const title = req.body.title;
//     const content = req.body.content;
//     // create a post with a dynamic Id with the current date
//     // return a confirmation message with the created post object
//     res.status(201).json({
//       message: 'Post created successfully!',
//       post: {
//         id: new Date().toISOString(),
//         title: title,
//         content: content
//       }
//     });
// }