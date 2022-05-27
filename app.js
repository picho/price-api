const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const priceRouter = require('./api/routes/prices');

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@pich.2qahw.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString);

const db = mongoose.connection;
db.on("error", () => console.log("Database connection error"));
db.once("open", () => console.log("database connection success"));

app.use(morgan('common', {

    stream: fs.createWriteStream('./log/accessLog/access.log', {flags: 'a'})
}));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//For avoid Cors problems
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

app.use('/prices', priceRouter);

//Error handler when a router was not hit (Not found)
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//General error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;