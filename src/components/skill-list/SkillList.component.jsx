import List from "./SkillList.style";
import { motion } from "framer-motion";
import { skillActive } from "@store";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */

const SkillList = ({ name, top, left, id, isActive, icon }) => {
  const dispatch = useDispatch();
  const skillButton = () => dispatch(skillActive(name));
  return (
    <List
      key={id}
      $top={top}
      $left={left}
      $isActive={isActive}
      as={motion.div}
      initial={{ x: -1000 }}
      animate={{
        x: 0,
        transition: {
          duration: 0.5,
          delay: `.${id}`,
          type: "spring",
          stiffness: 70,
        },
      }}
    >
      <div className="skill_item" onClick={skillButton}>
        <motion.p
          key={id}
          initial={{ y: 100, opacity: 0 }}
          animate={
            isActive
              ? null
              : { y: 0, opacity: 1, transition: { duration: 0.5 } }
          }
          exit={{ y: 0, opacity: 0, transition: { duration: 0.5 } }}
        >
          {name}
        </motion.p>
        <motion.span
          className="icon"
          initial={{ y: 0, opacity: 1 }}
          animate={
            isActive
              ? {display:'none'}
              : { y: -100, opacity: 0, transition: { duration: 0.5 } }
          }
          $isActive={isActive}
        >
          {icon}
        </motion.span>
      </div>
    </List>
  );
};

export default SkillList;
