/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Description from "./InfoDescription.style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const API = import.meta.env.VITE_API;

const InfoDescription = ({ line }) => {
  const { line1, line2, line3, line4 } = line;
  const { menu6 } = useSelector((state) => state.aboutState);
  const navigate = useNavigate();

  const touchHandler = () => navigate("/contact");

  return (
    <Description>
      {line1 && (
        <motion.p
          key={line1}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.1, duration: 0.5 },
          }}
        >
          -{line1}
        </motion.p>
      )}
      {line2 && (
        <motion.p
          key={line2}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          }}
        >
          -{line2}
        </motion.p>
      )}
      {line3 && (
        <motion.p
          key={line3}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.5 },
          }}
        >
          -{line3}
        </motion.p>
      )}
      {line4 && (
        <motion.p
          key={line4}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.5 },
          }}
        >
          -{line4}
        </motion.p>
      )}
      <div className="btn_gp">
        <a href={`${API}/api/v1/cv/download`} className="cv_btn btn">
          Download CV
        </a>

        <motion.div
        key='touch_btn'
          className="touch_btn btn"
          onClick={touchHandler}
          initial={{ y: 100, opacity: 0 }}
          animate={menu6 ? { y: 0, opacity: 1 }:null}
        >
          Touch Me
        </motion.div>
      </div>
    </Description>
  );
};

export default InfoDescription;
