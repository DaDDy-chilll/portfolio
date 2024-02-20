import { motion } from "framer-motion";

export const NavLine = () => {
  return (
    <motion.svg
      width="96"
      height="13"
      viewBox="0 0 96 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: "500px" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    >
      <path
        d="M86 7.5L96 12.2735V0.726497L86 5.5V7.5ZM10 5.5L0 0.726497V12.2735L10 7.5V5.5ZM87 5.5L9 5.5V7.5L87 7.5V5.5Z"
        fill="black"
      />
    </motion.svg>
  );
};
