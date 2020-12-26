const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../user.js');

router.route('/').get(
  function(req,res){
    res.render('register');
  }
).post(
  function(req,res){
    const newUser = new User({
      email: req.body.username,
      password: req.body.password
    });
    newUser.save(function(err){
      if(err){
        console.log(err);
      }
      else{
        res.render('secrets');
      }
    });
  }
);

module.exports = router;
