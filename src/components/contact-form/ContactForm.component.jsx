/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ContactStyle from "./ContactForm.style";
import { useState } from "react";
import validator from "validator";
import axios from "axios";
import { openAlert } from "@store";
import { useDispatch } from "react-redux";
const API = import.meta.env.VITE_API;

openAlert;
const ContactForm = () => {
  const conatctForm = {
    uname: "",
    email: "",
    comment: "",
  };

  const [contact, setContact] = useState(conatctForm);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const changeHandle = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const contactFetch = async () => {
    const response = await axios
      .post(`${API}/api/v1/mail/send`, contact)
      .catch((error) => error);
    console.log(response);
    if (response && response.status === 200)
      dispatch(openAlert({ comment: response.data.message, type: "success" }));
    else {
      if (response.response && response.response.status === 500)
        dispatch(
          openAlert({
            comment: `${response.response.statusText}. Please Try Again Later.`,
            type: "error",
          })
        );
      else dispatch(openAlert({ comment: response.message, type: "error" }));
    }
    setLoading(false);
  };

  const sendClick = async () => {
    if (!contact.uname || !contact.email || !contact.comment)
      dispatch(openAlert({ comment: "Please fill all input", type: "error" }));
    else if (!validator.isEmail(contact.email))
      dispatch(
        openAlert({ comment: "Please enter a valid email", type: "error" })
      );
    else {
      setLoading(true);
      contactFetch();
    }
  };

  return (
    <ContactStyle $loading={loading}>
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
          disabled={loading}
        >
          {loading && <img src="src\assets\img\Loading.gif" width="15%" />}
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
