//create web server

//import express
const express = require('express');
//import body-parser
const bodyParser = require('body-parser');
//import mongoose
const mongoose = require('mongoose');
//import express-session
const session = require('express-session');
//import express-validator
const expressValidator = require('express-validator');
//import express-messages
const flash = require('connect-flash');
//import passport
const passport = require('passport');
//import config
const config = require('./config/database');
//import file upload
const fileUpload = require('express-fileupload');
//import path
const path = require('path');

//connect to database
mongoose.connect(config.database);
let db = mongoose.connection;

//check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

//check for db errors
db.on('error', function(err){
    console.log(err);
});

//init app
const app = express();

