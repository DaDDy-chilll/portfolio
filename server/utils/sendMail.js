/* eslint-disable no-undef */
const { createMail } = require("./createMail");

const sendMail = (user) => {
  const mail = createMail();

  const mailOptions = {
    from: "mr.paingsettkyaw@gmail.com",
    to: user.email,
    subject: "Thanks for contact me.",
    html: `<p>${user.comment}</p>`,
  };

  mail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };
