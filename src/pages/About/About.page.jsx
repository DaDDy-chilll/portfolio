import { motion } from "framer-motion";
import { Container } from "./About.style";
import { MyInfoContainer } from "@components";

const About = () => {
  document.body.style.backgroundColor = "var(--secondary-color)";
  return (
    <Container
      key="about"
      as={motion.div}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{
        scaleY: 1,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.1,
          type: "tween",
          stiffness: 300,
        },
      }}
      exit={{ y: "100%", opacity: 0, transition: { duration: 0.1 } }}
    >
      <MyInfoContainer />
    </Container>
  );
};

export default About;
