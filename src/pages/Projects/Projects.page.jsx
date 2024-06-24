/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Container, BackGround } from "./Projects.style";

const projects = [
  {
    id: 1,
    name: "shoppie",
    image: "shoppie",
    github: "https://github.com/who-0/shoppie",
    live: "https://shoppie-gqvo.onrender.com/",
    language: ["react", "node", "express", "mongodb"],
    description: "Mini online shop website.",
    explain:""
  },
  {
    id: 2,
    name: "robot friends",
    image: "robot",
    github: "https://github.com/DaDDy-chilll/myrobotsfriend",
    live: "https://newsletter-c3an.onrender.com/",
    language: ["react", "Robots API"],
    description: "Get json data from Robots Api and display with React",
  },
];

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
