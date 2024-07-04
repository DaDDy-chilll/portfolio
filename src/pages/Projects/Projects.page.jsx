/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Container, BackGround } from "./Projects.style";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isCardOpen, setIsCardOpen] = useState(false);
  useEffect(() => {
    const fecthProjects = async () => {
      const res = await axios.get("/src/utils/myprojects.json");
      setProjects(res.data);
    };
    fecthProjects();
  }, []);

  const cardOpen = () => setIsCardOpen(!isCardOpen)


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
          {projects.map((pj) => (
            <div className="project_card" key={pj.id} onClick={cardOpen}>
              <img
                src={`/src/assets/img/projects/icon/${pj.image}.png`}
                width="30%"
              />
              <p className="title">{pj.name}</p>
              <div className="tools">
                {pj.language[0] && <p>{pj.language[0]}</p>}
                {pj.language[1] && <p>{pj.language[1]}</p>}
                {pj.language[2] && <p>{pj.language[2]}</p>}
                {pj.language[3] && <p>{pj.language[3]}</p>}
                {pj.language[4] && <p>{pj.language[4]}</p>}
                {pj.language[5] && <p>{pj.language[5]}</p>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Projects;
