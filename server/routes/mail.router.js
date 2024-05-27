/* eslint-disable no-undef */
const express = require("express");
const { httpSendMail } = require("../controllers");
const mailRouter = express.Router();

mailRouter.post("/send", httpSendMail);

module.exports = mailRouter;
