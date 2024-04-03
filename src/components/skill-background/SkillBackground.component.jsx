import { motion } from "framer-motion"
import { TriangleContainer } from "./SkillBackground.style"
import { CenterBlock } from "@assets";


const SkillBackground = () => {
  return (
    <TriangleContainer>
    <div className="triangle_container">
      <motion.div
        className="uptriangle"
        initial={{ y: -300 }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
        exit={{ y: -300, opacity: 0 }}
      >
      {/* active icon */}
        <p style={{color:'white',textAlign:'start'}}>hello world</p>
      </motion.div>

      <motion.div
        className="bottomtriangle"
        initial={{ y: 300 }}
        animate={{ y: 0, transition: { duration: 0.5 } }}
        exit={{ y: 300, opacity: 0 }}
      >
      {/* see project button */}
        <div style={{color:"white"}}>see projects</div> 
      </motion.div>
    </div>
    <motion.div
      className="center_block"
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: {
          duration: 0.5,
          delay: 1,
          type: "spring",
          stiffness: 300,
        },
      }}
      exit={{ scale: 0 }}
    >
      <CenterBlock />
    </motion.div>
  </TriangleContainer>
  )
}

export default SkillBackground