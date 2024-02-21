import { motion } from "framer-motion";



export const LogoLeft = () => {
  return (
    <motion.svg
      width="445"
      height="711"
      viewBox="0 0 445 711"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{y:"-100px",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{delay:.9, duration:.5,type:'spring',stiffness:200}}
      exit={ {y:"-100px", opacity: 0 ,transition:{duration:.2}}}>
    >
      <path
        d="M222.409 0.827637L29.7971 112.032V334.442L222.409 445.647L415.022 334.442V112.032L222.409 0.827637Z"
        fill="black"
        fillOpacity="0.27"
      />
      <path
        d="M415.181 334.199L349.202 372.016V709.954H415.181V334.199Z"
        fill="black"
        fillOpacity="0.27"
      />
      <path
        d="M349.203 710.498V372.56L275.214 455.837L275.179 625.644L349.203 710.498Z"
        fill="black"
        fillOpacity="0.27"
      />
      <path
        d="M219.083 90.9445L332.166 156.232V286.808L219.083 352.096L106.001 286.808V156.232L219.083 90.9445Z"
        fill="white"
      />
    </motion.svg>
  );
};
