const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jsonwebtocken= require('jsonwebtoken');

const articlesRouter = require('./routes/articles');
const authRouter = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/1611', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', err => console.log('mongo error occured',err) );
db.once('open', function(err) {
    if (err) throw err;
    console.log('we\'re connected!');  
});
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/articles', articlesRouter);
app.use('/auth', authRouter);


app.listen(3000);
