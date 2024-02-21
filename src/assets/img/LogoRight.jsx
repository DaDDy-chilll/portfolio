import { motion } from "framer-motion";

export const LogoRight = () => {
  return (
    <motion.svg
      width="361"
      height="689"
      viewBox="0 0 361 689"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{y:"100px",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{delay:.9, duration:.5,type:'spring',stiffness:200}}
      exit={{y:"100px", opacity:0,transition:{duration:.2}}}
    >
      <path
        d="M0.931488 688.361V109.726L175.822 0L361 99.2757V318.727L180.966 423.228L62.6575 355.303L134.671 423.228V600.88L62.6575 688.361H0.931488Z"
        fill="#272727"
        fillOpacity="0.27"
      />
      <path
        d="M189.419 73.1505L85.3723 134.17V256.21L189.419 317.229L293.466 256.21V134.17L189.419 73.1505Z"
        fill="white"
      />
    </motion.svg>
  );
};
