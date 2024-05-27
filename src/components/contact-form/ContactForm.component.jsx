/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ContactStyle from "./ContactForm.style";
import { useState } from "react";
import validator from "validator";
import axios from "axios";
const API = import.meta.env.VITE_API;


const ContactForm = () => {
  const conatctForm = {
    uname: "",
    email: "",
    comment: "",
  };

  const [contact, setContact] = useState(conatctForm);
  const [loading,setLoading] = useState(true)
  const [response,setResponse] = useState(null)
  const changeHandle = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const contactFetch = async () => {
     const res= await axios.post(`${API}/api/v1/mail/send`,contact);
     console.log(res);
     console.log(res.data);
     setResponse(res.data)
  }

  const sendClick = async () => {
    if (!validator.isEmail(contact.email)) {
      alert("Please enter a valid email");
    } else {

      contactFetch()
      console.log(response);
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
          name="email"
          id="email"
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
          value={contact.email}
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



// config
// : 
// {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
// data
// : 
// success
// : 
// "Successful send mail."
// [[Prototype]]
// : 
// Object
// headers
// : 
// AxiosHeaders {content-length: '35', content-type: 'application/json; charset=utf-8'}
// request
// : 
// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status
// : 
// 200
// statusText
// : 
// "OK"