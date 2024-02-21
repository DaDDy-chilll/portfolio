/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Number } from "./PageNumber.style";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRef } from "react";

const PageNumber = ({ pageNumber }) => {
  const numberRef = useRef(null)
  const navigate = useNavigate();
  const windowWidth = window.innerWidth / 2 - 65;

  const prevBtn = () => {
   numberRef.current.innerText=pageNumber
    const path = pageNumber === 1 ? null : checkRoute(pageNumber - 1);
    navigate(path);
  };

  const nextBtn = () => {
   numberRef.current.innerText=pageNumber
    const path = pageNumber === 5 ? null : checkRoute(pageNumber + 1);
    navigate(path);
  };
  return (
    <Number $windowwidth={windowWidth}>
      <button onClick={prevBtn}>
        <AiOutlineLeft />
      </button>
      <motion.div
        className="number"
        initial={{ y: "50px" }}
        animate={{ y: 0 }}
        transition={{ duration: .05, ease: "easeIn",type:"spring",stiffness:100, }}
      >
        0<span ref={numberRef}>{pageNumber}</span>
      </motion.div>
      <button onClick={nextBtn}>
        <AiOutlineRight />
      </button>
    </Number>
  );
};

const checkRoute = (pageNo) => {
  switch (pageNo) {
    case 1:
      return "/";
    case 2:
      return "/about";
    case 3:
      return "/skills";
    case 4:
      return "/projects";
    case 5:
      return "/contact";
    default:
      break;
  }
};

export default PageNumber;
