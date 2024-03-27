import List from "./SkillList.style";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */

const SkillList = ({ name, top, left, id }) => {
  return (
    <List
      key={id}
      $top={top}
      $left={left}
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
      <div className="skill_item">
        <p>{name}</p>
      </div>
    </List>
  );
};

export default SkillList;
