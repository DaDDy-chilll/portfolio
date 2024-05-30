/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Container, BackGround } from "./Projects.style";

const Projects = () => {
  return (
    <>
      <BackGround
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      />
      <Container>
        <div className="project_card_conatiner">
        <div className="project_card">
          
          </div>

          <div className="project_card">
          
          </div>

          <div className="project_card">
          
          </div>

          <div className="project_card">
          
          </div>

          <div className="project_card">
          
          </div>
          <div className="project_card">
          
          </div>
          <div className="project_card">
          
          </div>
          <div className="project_card">
          
          </div>

        </div>
      </Container>
    </>
  );
};

export default Projects;
