/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ContactStyle from "./ContactForm.style";
import { useState } from "react";
import validator from "validator";
const ContactForm = () => {
  const conatctForm = {
    uname: "",
    mail: "",
    comment: "",
  };

  const [contact, setContact] = useState(conatctForm);

  const changeHandle = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendClick = () => {
    if (!validator.isEmail(contact.mail)) {
      alert("Please enter a valid email");
    } else {
      console.log(contact);
    }
  };

  return (
    <ContactStyle>
      <div className="contact_form">
        <motion.input
          type="text"
          name="uname"
          id="uname"
          placeholder="Name"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 0.2,
              type: "spring",
              stiffness: 400,
            },
          }}
          exit={{ y: 50, opacity: 0 }}
          value={contact.uname}
          onChange={(e) => changeHandle(e)}
        />
        <motion.input
          type="email"
          name="mail"
          id="mail"
          placeholder="Email"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.7,
              duration: 0.2,
              type: "spring",
              stiffness: 400,
            },
          }}
          exit={{ y: 50, opacity: 0 }}
          value={contact.mail}
          onChange={(e) => changeHandle(e)}
        />
        <motion.textarea
          type="text"
          name="comment"
          id="comment"
          placeholder="What want to say to me."
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.9,
              duration: 0.2,
              type: "spring",
              stiffness: 400,
            },
          }}
          exit={{ y: 50, opacity: 0 }}
          value={contact.comment}
          onChange={(e) => changeHandle(e)}
        ></motion.textarea>
        <motion.button
          type="submit"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 2.1,
              duration: 0.2,
              type: "spring",
              stiffness: 400,
            },
          }}
          exit={{ y: 50, opacity: 0 }}
          onClick={sendClick}
        >
          send
        </motion.button>
      </div>
    </ContactStyle>
  );
};

export default ContactForm;
