/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Precent from "./SkillPercent.style";
import { motion } from "framer-motion";
const SkillPercent = () => {
  const { activePrecent } = useSelector((state) => state.skillsState);

  return (
    <Precent
      $activePrecent={activePrecent}
      as={motion.div}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 0.5, delay: 2, type: "spring", stiffness: 400 },
      }}
      exit={{ scale: 0, transition: { duration: 0.1 } }}
    >
      <div className="wave"></div>
      <div className="percent_text">{activePrecent}%</div>
    </Precent>
  );
};

export default SkillPercent;
