/* eslint-disable no-undef */
const express = require("express");
const { httpGetCV } = require("../controllers");
const cvRouter = express.Router();

cvRouter.get("/download", httpGetCV);

module.exports = cvRouter;
