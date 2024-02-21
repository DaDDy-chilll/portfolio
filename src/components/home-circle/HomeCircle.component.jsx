import { motion } from "framer-motion";
import { Circl } from "./HomeCircle.style";

motion;
const HomeCircle = () => {
  return (
    <Circl>
      <motion.div
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
        exit={{scale:0,transition:{delay:.1}}}
      ></motion.div>
    </Circl>
  );
};

export default HomeCircle;
