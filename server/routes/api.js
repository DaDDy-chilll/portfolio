/* eslint-disable no-undef */
const express = require("express");
const cvRouter = require("./cv.router");
const mailRouter = require("./mail.router");
const api = express.Router();

api.use("/cv", cvRouter);
api.use("/mail", mailRouter);

module.exports = api;
