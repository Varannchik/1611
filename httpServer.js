const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
const bodyParser = require('body-parser');


const articlesRouter = require('./routes/articles');
const authRouter = require('./routes/auth');


const mongoose = require('mongoose'),
    //Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
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
autoIncrement.initialize(mongoose.connection);


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/articles', articlesRouter);
app.use('/auth', authRouter);


app.listen(3000);
