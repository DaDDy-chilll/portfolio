/* eslint-disable no-undef */
const { createMail } = require("./createMail");

const sendMail = (user) => {
    const mail = createMail();

    const mailOptions = {
        from:"mr.paingsettkyaw@gmail.com",
        to:user.mail,
        subject:'Thanks for contact me.',
        html:`<p>hello world</p>`
    }


    mail.sendMail(mailOptions,(error,info) => {
        if(error) {
            console.log(error);
        }else{
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = {sendMail}