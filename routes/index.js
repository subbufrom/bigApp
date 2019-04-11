'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers');
const Role = require('../auth/roles');
const auth = require('../auth/authorize');

router.post('/balanced', auth.authorize(), controller.balance)
  .post('/authenticate', controller.authenticate)
  .get('/listAll', auth.authorize(Role.Admin), controller.getAll)
  .post('/register', controller.register)
  .delete('/delete', auth.authorize(Role.Admin), controller.deleteUser);

module.exports = router;
