'use strict';
const express = require('express');
const routes = require('./routes');
const createError = require('http-errors');
const db = require('./dbConnection/database');
const util = require('./util');

const app = express();

app.use(express.json());
app.use('/bigApp', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use(util.errorHandler);

module.exports = app;
