import { AlertImg } from "@assets";
import { FaXmark } from "react-icons/fa6";
import AlertStyle from "./Alert.style";
import { motion } from "framer-motion";
const windowWidth = window.innerWidth / 2;

const Alert = () => {
  return (
    <AlertStyle
      $windowWidth={windowWidth}
      as={motion.div}
      initial={{ y: -140, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{ y: -140, opacity: 0 }}
    >
      <div className="alert_container">
        <AlertImg />
        <p>Your MessageMessageMessageMessageMessage</p>
        <FaXmark className="close_btn" />
      </div>
    </AlertStyle>
  );
};

export default Alert;
