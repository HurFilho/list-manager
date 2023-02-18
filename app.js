const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => runServer(PORT));

const routes = require('./src/routes/index.js');

app.use(routes);

const runServer = (PORT) => {
    console.log(`Server running on port ${PORT}`);
}