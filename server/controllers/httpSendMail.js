/* eslint-disable no-undef */
const User = require("../models/users.mongo");

const httpSendMail = async (req, res) => {
  const { uname, email, comment } = req.body;
  if (!uname || !email || !comment)
    return res.status(400).json({ error: "missing input value!" });
console.log(uname,email,comment);
  try {
     await User.create({
      name: uname,
      email,
      comment,
    });
    //  User.save();
    res.status(200).json({success:'Successful send mail.'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = httpSendMail;
