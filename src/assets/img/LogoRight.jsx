import { motion } from "framer-motion";


export const LogoRight = () => {
  return (
    <motion.svg
      width="445"
      height="713"
      viewBox="0 0 445 713"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{y:"100px",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{delay:.9, duration:.5,type:'spring',stiffness:200}}
      exit={{y:"100px", opacity:0,transition:{duration:.2}}}
    >
      <path
        d="M222.591 0L415.203 111.205V333.614L222.591 444.819L29.9784 333.614V111.205L222.591 0Z"
        fill="black"
        fillOpacity="0.27"
      />
      <path
        d="M29.1467 333.11L95.1251 371.332V712.888H29.1467V333.11Z"
        fill="black"
        fillOpacity="0.27"
      />
      <path
        d="M95.1252 712.888V371.732L169.114 457.021L169.15 627.633L95.1252 712.888Z"
        fill="black"
        fillOpacity="0.27"
      />
      <path
        d="M225.917 90.1168L112.834 155.405V285.981L225.917 351.269L338.999 285.981V155.405L225.917 90.1168Z"
        fill="white"
      />
    </motion.svg>
  );
};
