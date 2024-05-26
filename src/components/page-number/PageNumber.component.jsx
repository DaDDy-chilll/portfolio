/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Number } from "./PageNumber.style";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { changeInfo } from "@store";

const PageNumber = () => {
  const { pageNumber, pageTitle } = useSelector((state) => state.pageInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const windowWidth = window.innerWidth / 2 - 71;
  let path;

  const prevBtn = () => {
    if (pageNumber === 1) return;
    path = checkRoute(pageNumber - 1);
    dispatch(changeInfo(path));
    navigate(path);
  };

  const nextBtn = () => {
    if (pageNumber === 5) return;
    path = checkRoute(pageNumber + 1);
    dispatch(changeInfo(path));
    navigate(path);
  };
  return (
    <Number $windowwidth={windowWidth} $name={pageTitle}>
      <button onClick={prevBtn}>
        <AiOutlineLeft className="icon" />
      </button>
      <motion.div
        className="number"
        initial={{ y: "50px" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.05,
          ease: "easeIn",
          type: "spring",
          stiffness: 100,
        }}
        key={pageNumber}
      >
        0<span>{pageNumber}</span>
      </motion.div>
      <button onClick={nextBtn}>
        <AiOutlineRight className="icon" />
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
