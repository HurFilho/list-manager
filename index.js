const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME;
const MONGO_DATABASE_URL = process.env.MONGO_DATABASE_URL;
const MONGO_DATABASE_PASSWORD = process.env.MONGO_DATABASE_PASSWORD;

app.use(express.json());
app.use('/api', routes);

const runServer = (PORT) => {
    console.log(`Server running on port ${PORT}`);
}

mongoose.set('strictQuery', false);

mongoose
    .connect(`mongodb+srv://api:${MONGO_DATABASE_PASSWORD}@${MONGO_DATABASE_URL}/${MONGO_DATABASE_NAME}?retryWrites=true&w=majority`,
        {
            dbName: 'lists_db',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => { app.listen(PORT, () => runServer(PORT)); })
    .catch(err => console.log('err', err))


