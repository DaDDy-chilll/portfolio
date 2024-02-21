import { LogoLeft, LogoRight } from "@assets"
import { BackgroundLogoContainer } from "./Home.style"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <BackgroundLogoContainer as={motion.div}>
      <LogoLeft />
      <LogoRight />
    </BackgroundLogoContainer>
  )
}

export default Home