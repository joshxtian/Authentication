//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
const config = require('./config/database.js');


mongoose.connect(config.database,{useNewUrlParser:true,useUnifiedTopology:true});

const port = 3000 || process.env.PORT;

const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const homePage = require('./routes/home.js');
const loginPage = require('./routes/login.js');
const regPage = require('./routes/register.js');

app.use('/',homePage);
app.use('/login',loginPage);
app.use('/register',regPage);



app.listen(port,()=>console.log(`Server conected in Port ${port}`));
