/* eslint-disable no-unused-vars  */
/* eslint-disable no-undef */
const nodemailer = require('nodemailer')

const createMail = () => {
    const transpoter = nodemailer.createTransport({
        service:'gmail',
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        logger:true,
        debug:true,
        secureConnection:false,
        auth:{
            user:'mr.paingsettkyaw@gmail.com',
            pass:process.env.AUTH_PASS
        },
        tls:{
            rejectUnauthorized:true,
        }
    })

    return transpoter;
}

module.exports = {createMail}