import Wrapper from "./Loader.style"
import {motion} from 'framer-motion'

const svgVariants = {
    hidden:{rotate:-180},
    visibale:{
        rotate:0,
        transition:{duration:1}
    }
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
            delpay:1,
            duration:2,
            ease:'easeInOut'
        }
    }
}
const Loader = () => {
  return (
    <Wrapper>
      <motion.svg
      width="117"
      height="129"
      viewBox="0 0 117 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.path
        d="M56.0959 129V20.5628L28.8493 0L0 18.6045V59.7301L28.0479 79.3137L46.4795 66.5844L35.2603 79.3137V112.606L46.4795 129H56.0959Z"
        fill="white"
        variants={pathVariants}
      />
      <motion.path
        d="M26.731 13.7085L42.9407 25.1437V48.0141L26.731 59.4493L10.5213 48.0141V25.1437L26.731 13.7085Z"
        fill="#272727"
        variants={pathVariants}
      />
      <motion.path
        d="M60.9041 129V20.5628L88.1507 0L117 18.6045V59.7301L88.9521 79.3137L70.5205 66.5844L81.7397 79.3137V112.606L70.5205 129H60.9041Z"
        fill="white"
        variants={pathVariants}

      />
      <motion.path
        d="M90.269 13.7085L74.0593 25.1437V48.0141L90.269 59.4493L106.479 48.0141V25.1437L90.269 13.7085Z"
        fill="#272727"
        variants={pathVariants}

      />
    </motion.svg>
    </Wrapper>
  )
}

export default Loader