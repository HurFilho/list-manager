const express = require("express");

const routes = require('./src/routes/channels');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use('/api', routes);

const runServer = (PORT) => {
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, () => runServer(PORT));