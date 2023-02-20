const express = require("express");
const routes = require('./src/routes/channels');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

const password = "xhkBU2KGVFIFYX13";

app.use(express.json());
app.use('/api', routes);

const runServer = (PORT) => {
    console.log(`Server running on port ${PORT}`);
}

mongoose.set('strictQuery', false);

mongoose
    .connect(`mongodb+srv://api:${password}@cluster-gerenciador.zvi7idy.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(result => {
        app.listen(PORT, () => runServer(PORT));
    })
    .catch(err => console.log('err', err))


