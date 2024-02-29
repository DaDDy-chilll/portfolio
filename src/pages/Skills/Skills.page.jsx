import { CenterBlock } from "@assets";
import { TriangleContainer } from "./Skills.style";
import { motion } from "framer-motion";

const Skills = () => {
  document.body.style.backgroundColor = "var(--primary-color)";

  return (
    <>
      <TriangleContainer>
        <div className="triangle_container">
          <motion.div
            className="uptriangle"
            initial={{ y: -300 }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: -300, opacity: 0 }}
          ></motion.div>

          <motion.div
            className="bottomtriangle"
            initial={{ y: 300 }}
            animate={{ y: 0, transition: { duration: 0.5 } }}
            exit={{ y: 300, opacity: 0 }}
          ></motion.div>
        </div>
        <motion.div
          className="center_block"
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 1,
              type: "spring",
              stiffness: 300,
            },
          }}
          exit={{ scale: 0 }}
        >
          <CenterBlock />
        </motion.div>
      </TriangleContainer>
    </>
  );
};

export default Skills;
