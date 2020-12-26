const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
  email:String,
  password:String
});

userSchema.plugin(encrypt,{secret:process.env.SECRET, encryptedFields:["password"]});

var User = module.exports = new mongoose.model('User', userSchema);
