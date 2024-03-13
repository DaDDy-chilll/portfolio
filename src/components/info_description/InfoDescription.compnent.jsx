/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Description from "./InfoDescription.style";

const InfoDescription = ({ line }) => {
  const { line1, line2, line3, line4 } = line;
  return (
    <Description>
      {line1 && (
        <motion.p
          key={line1}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.1, duration: .5 },
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
    </Description>
  );
};

export default InfoDescription;
