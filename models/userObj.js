'use strict';
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  DOB: String,
  role: String,
  message: String,
  attempts: Number
});
module.exports = mongoose.model('UserObj', userSchema);
