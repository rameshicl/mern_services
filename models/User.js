const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  } ,
  email: String,
  age:{
    type:Number,
    min:1,
    max:80

  } 
});

module.exports = mongoose.model('User', userSchema);