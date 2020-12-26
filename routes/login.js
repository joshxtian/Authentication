const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../user.js');
router.route('/').get(
  function(req,res){
    res.render('login');
  }
).post(
  function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email:username},function(err, result){
      if(err){
        console.log(err);
      }
      else{
        if(result){
          if(result.password === password){
            res.render('secrets');
          }
        }
      }
    });
  }
);

module.exports = router;
