const cors = require("cors")
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const routes_v1 = require('./src/routes/v1');
const routes_v2 = require('./src/routes/v2');

const app = express();


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

dotenv.config();
const PORT = process.env.PORT;
const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME;
const MONGO_DATABASE_URL = process.env.MONGO_DATABASE_URL;
const MONGO_DATABASE_PASSWORD = process.env.MONGO_DATABASE_PASSWORD;

app.use(express.json());
app.use('/api/v1', routes_v1);
app.use('/api/v2', routes_v2);

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


