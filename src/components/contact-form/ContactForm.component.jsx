import { motion } from "framer-motion"
import ContactStyle from "./ContactForm.style"

const ContactForm = () => {
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
          >
            send
          </motion.button>
        </div>
    </ContactStyle>
  )
}

export default ContactForm