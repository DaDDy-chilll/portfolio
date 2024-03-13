/* eslint-disable no-undef */
const express = require('express');
const cvRouter = require('./cv.router');
const api = express.Router();

api.use('/cv',cvRouter);

module.exports = api;