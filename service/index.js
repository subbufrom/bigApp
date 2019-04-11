'use strict';
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const userRegister = require('../models/userObj');
const util = require('../util');

const checkForBalance = async (body, currentUser) => {
  const stringToBalance = body.key;
  let message = '';
  if (util.isStringBalanced(stringToBalance)) {
    message = 'Success';
  } else {
    message = 'failed';
  }
  const {userName, email} = currentUser;
  const user = await userRegister.findOneAndUpdate({username: userName, email},
    {$inc: {attempts: 1}, message}, {new: true});
  return user;
};

const authenticate = async ({username, password}) => {
  const users = await userRegister.find({username, password});
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({sub: user.id, userName: user.username, role: user.role, email: user.email}, config.secret);
    return {
      token,
      message: 'success'
    };
  }
};

const getAll = async () => {
  const users = await userRegister.find();
  return users.map(u => {
    const {username, DOB, email, role} = u;
    return {username, DOB, email, role};
  });
};

const registerUser = (obj) => {
  const user = new userRegister(obj);
  return user.save();
};

const deleteUser = async (obj) => {
  const {username, email} = obj;
  const users = await userRegister.deleteOne({username, email});
  return 'Deleted';
};
module.exports = {checkForBalance, authenticate, getAll, registerUser, deleteUser};
