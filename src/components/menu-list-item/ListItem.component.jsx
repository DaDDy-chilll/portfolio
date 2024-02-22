import { Container } from "./ListItem.style";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const ListItem = ({ id, name, path }) => {
  console.log(path);
  return (
    <Container
      as={motion.div}
      $name={name}
      initial={initialStyle(name)}
      animate={animationStyle(name,id)}
    >
      {name}
    </Container>
  );
};

const initialStyle = (name) => {
    switch (name) {
      case "home":
        return { x: "300px", skew: "-30deg" };
      case "about":
        return { x: "300px", y: "-48px", skew: "-30deg" };
      case "skills":
        return { x: "300px", y: "-40px", skew: "-30deg" };
      case "projects":
        return { x: "300px", y: "-88px", skew: "-30deg" };
      case "contact":
        return { x: "300px", y: "-80px", skew: "-30deg" };
      default:
        break;
    }
  }

const animationStyle = (name) => {
    switch (name) {
        case "home":
          return {
            x: "-250px",
            transition: {
              delay: .1,
              duration: .3,
              type: "tweet",
              ease:"easeIn"
              
            },
          };
        case "about":
          return {
            x: "-50px",
            y: "-48px",
            transition: {
              delay:.2,
              duration: .3,
              type: "tweet",
              ease:"easeIn"
            },
          };
        case "skills":
          return {
            x: "-200px",
            y: "-40px",
            transition: {
              delay: .3,
              duration: .3,
              type: "tweet",
              ease:"easeIn"

            },
          };
        case "projects":
          return {
            x: 0,
            y: "-88px",
            transition: {
              delay: .4,
              duration: .3,
              type: "tweet",
              ease:"easeIn"

            },
          };
        case "contact":
          return {
            x: "-80px",
            y: "-80px",
            transition: {
              delay: .5,
              duration: .3,
              type: "tweet",
              ease:"easeIn"

            },
          };
        default:
          break;
      }
   
}

export default ListItem;
