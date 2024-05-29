/* eslint-disable no-unused-vars */
import { AlertImg } from "@assets";
import { FaXmark } from "react-icons/fa6";
import AlertStyle from "./Alert.style";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "@store";

const windowWidth = window.innerWidth / 2;
const Alert = () => {
  const { comment,type  } = useSelector((state) => state.alertState);
  const dispatch = useDispatch();

 let timeoutID = setTimeout(() => dispatch(closeAlert()), 3100);
  const closeBtn = () => {
    clearTimeout(timeoutID - 1);
    clearTimeout(timeoutID);
    dispatch(closeAlert());
  }
  return (
    <AlertStyle
      key="alert"
      $windowWidth={windowWidth}
      $alertType={type}
      as={motion.div}
      initial={ { y: -140, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      exit={{ y: -140, opacity: 0, transition: { duration: 3 } }}
    >
      <div className="alert_container">
        <AlertImg />
        <p>{comment}</p>
        <FaXmark
          className="close_btn"
          onClick={closeBtn}
        />
      </div>
    </AlertStyle>
  );
};

export default Alert;
