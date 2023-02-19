const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(routes);

const routes = require('./src/routes/index.js');

const runServer = (PORT) => {
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, () => runServer(PORT));