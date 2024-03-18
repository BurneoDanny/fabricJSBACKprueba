var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
var cors = require('cors');


var mongoose = require('mongoose');
var passport = require('passport');
 
mongoose.connect(process.env.DB_HOST)
.then(() => console.log("DB connection successful!"))
.catch((err) => {console.error.bind(console, `MongoDB connection error: ${err}`)});



var app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var canvasRouter = require('./routes/canvas.route');
app.use('/canvas', canvasRouter)

module.exports = app;
