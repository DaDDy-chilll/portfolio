import { motion } from "framer-motion";
import { Circl } from "./HomeCircle.style";
import { TextCircle,IconContainer } from "@components";

motion;
const HomeCircle = () => {
  return (
    <Circl>
      <motion.div
        key="half_circle"
        className="half_circle"
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            delay: 0.5,
            duration: 0.5,
            type: "spring",
            stiffness: 500,
          },
        }}
        exit={{ scale: 0, transition: { delay: 0.1 } }}
      >
       <motion.span initial={{opacity:0}} whileHover={{opacity:1,transition:{duration:.5,ease:"easeIn",type:'spring',stiffness:300,when:"beforeChildren"}}}>
       <TextCircle/>
       </motion.span>
      </motion.div>
      <IconContainer />
    </Circl>
  );
};

export default HomeCircle;
