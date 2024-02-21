import {motion} from 'framer-motion'

const svgVariants = {
    hidden:{},
    visibale:{transition:{delay:2}}
}

const pathVariants = {
    hidden:{
        opacity:0,
        pathLength:0
    },
    visible:{
        opacity:1,
        pathLength:1,
        transition:{
            delpay:2,
            duration:2,
            ease:'easeInOut',
            repeat:Infinity,
            repeatType: "reverse",
        }
    }
}
export const Loader = () => {
  return (
    <motion.svg
      width="398"
      height="439"
      viewBox="0 0 398 439"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M190.945 436.205V72.8942L99.6575 4L3 66.3329V204.121L96.9726 269.735L158.726 227.086L121.137 269.735V381.278L158.726 436.205H190.945Z"
        stroke="white"
        strokeWidth="5"
        variants={pathVariants}
      />
      <motion.path
        d="M40.7513 89.538L92.5606 52.9888L144.37 89.538V163.572L92.5606 200.121L40.7513 163.572V89.538Z"
        stroke="black"
        strokeWidth="5"
        variants={pathVariants}
      />
      <motion.path
        d="M207.055 436.205V72.8942L298.342 4L395 66.3329V204.121L301.027 269.735L239.274 227.086L276.863 269.735V381.278L239.274 436.205H207.055Z"
        stroke="white"
        strokeWidth="5"
        variants={pathVariants}
      />
      <motion.path
        d="M357.249 89.538L305.439 52.9888L253.63 89.538V163.572L305.439 200.121L357.249 163.572V89.538Z"
        stroke="black"
        strokeWidth="5"
        variants={pathVariants}
      />
    </motion.svg>
  );
};


