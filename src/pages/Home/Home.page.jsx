import { LogoLeft, LogoRight } from "@assets";
import { BackgroundLogoContainer } from "./Home.style";
import { motion } from "framer-motion";
import { HomeCircle } from "@components";
const Home = () => {
  return (
 <>
     <BackgroundLogoContainer as={motion.div}>
      <LogoLeft />
      <LogoRight />
    </BackgroundLogoContainer>
   <HomeCircle />
 </>
  );
};

export default Home;
