/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Container, BackGround } from "./Projects.style";
import { useEffect, useState } from "react";
import axios from "axios";



const Projects = () => {
  const [projects,setProjects] = useState([])
  useEffect( () => {
   const fecthProjects = async() => {
    const res = await axios.get('/src/utils/myprojects.json')
    setProjects(res.data)
   }
   fecthProjects();
  },[])

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
            <img src="/src/assets/img/projects/icon/shoppie.png" width='40%' />
            <p className="title">shoppie</p>
            <div className="tools">
              <p>react</p>
              <p>node</p>
              <p>express</p>
              <p>mongodb</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
