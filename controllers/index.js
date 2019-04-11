'use strict';
const service = require('../service');

const balance = async (req, res) => {
  const body = req.body;
  const currentUser = req.user;
  const response = await service.checkForBalance(body, currentUser);
  const responseObj = {};
  responseObj.username = response.username;
  responseObj.message = response.message;
  responseObj.attempts = response.attempts;

  return res.status(200).send(responseObj);
};

const authenticate = (req, res, next) => {
  service.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({message: 'Username or password is incorrect'}))
    .catch(err => next(err));
};

const getAll = (req, res, next) => {
  service.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
};

const register = async (req, res) => {
  const usr = service.registerUser(req.body);
  if (usr) {
    return res.status(200).send({Message: 'Successfully Registered'});
  } else {
    return res.status(400).send({Message: 'Failed to Register'});
  }
};

const deleteUser = async (req, res) => {
  const body = req.body;
  const usr = await service.deleteUser(body);
  if (usr) {
    return res.status(200).send({Message: 'Successfully Deleted'});
  } else {
    return res.status(400).send({Message: 'Failed to Delete'});
  }
};
module.exports = {balance, authenticate, getAll, register, deleteUser};
