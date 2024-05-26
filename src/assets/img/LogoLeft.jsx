import { motion } from "framer-motion";

export const LogoLeft = () => {
  return (
    <motion.svg
      width="361"
      height="689"
      viewBox="0 0 361 689"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: "-100px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 1, type: "spring", stiffness: 200 }}
      exit={{ y: "-100px", opacity: 0, transition: { duration: 0.2 } }}
      key="logoleft"
    >
      <path
        d="M360.069 688.361V109.726L185.178 0L0 99.2757V318.727L180.034 423.228L298.342 355.303L226.329 423.228V600.88L298.342 688.361H360.069Z"
        fill="#272727"
        fillOpacity="0.27"
      />
      <path
        d="M171.581 73.1505L275.628 134.17V256.21L171.581 317.229L67.5343 256.21V134.17L171.581 73.1505Z"
        fill="white"
      />
    </motion.svg>
  );
};
