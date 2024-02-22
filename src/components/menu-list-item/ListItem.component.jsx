import { useSelector } from "react-redux";
import { Container } from "./ListItem.style";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types, no-unused-vars
const ListItem = ({ id, name,path }) => {
  const navigate = useNavigate();
  const { isOpen } = useSelector((state) => state.homeState);
  const {pageTitle} = useSelector(state => state.pageInfo);

  const routeHandle = () => navigate(path);
  return (
    <Container
      as={motion.div}
      $active={pageTitle === name ? true:false}
      initial={initialStyle(name)}
      animate={isOpen ? animationStyle(name) : exitStyle(name)}
      key={id}
      onClick={routeHandle}
      whileTap={clickStyle()}
    >
      {name}
    </Container>
  );
};

const initialStyle = (name) => {
  switch (name) {
    case "home":
      return {
        x: "300px",
        skew: "-30deg",
        transition: { duration: 0.2, ease: "easeOut" },
      };
    case "about":
      return {
        x: "300px",
        y: "-48px",
        skew: "-30deg",
        transition: { duration: 0.2, ease: "easeOut" },
      };
    case "skills":
      return {
        x: "300px",
        y: "-40px",
        skew: "-30deg",
        transition: { duration: 0.2, ease: "easeOut" },
      };
    case "projects":
      return {
        x: "300px",
        y: "-88px",
        skew: "-30deg",
        transition: { duration: 0.2, ease: "easeOut" },
      };
    case "contact":
      return {
        x: "300px",
        y: "-80px",
        skew: "-30deg",
        transition: { duration: 0.2, ease: "easeOut" },
      };
    default:
      break;
  }
};

const animationStyle = (name) => {
  switch (name) {
    case "home":
      return {
        x: "-250px",
        transition: {
          delay: 0.1,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "about":
      return {
        x: "-50px",
        y: "-48px",
        transition: {
          delay: 0.2,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "skills":
      return {
        x: "-200px",
        y: "-40px",
        transition: {
          delay: 0.3,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "projects":
      return {
        x: 0,
        y: "-88px",
        transition: {
          delay: 0.4,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "contact":
      return {
        x: "-80px",
        y: "-80px",
        transition: {
          delay: 0.5,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    default:
      break;
  }
};

const exitStyle = (name) => {
  switch (name) {
    case "home":
      return {
        x: "300px",
        transition: {
          delay: 0.2,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "about":
      return {
        x: "300px",
        y: "-48px",
        transition: {
          delay: 0.1,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "skills":
      return {
        x: "300px",
        y: "-40px",
        transition: {
          delay: 0.3,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "projects":
      return {
        x: "300px",
        y: "-88px",
        transition: {
          delay: 0.3,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    case "contact":
      return {
        x: "300px",
        y: "-80px",
        transition: {
          delay: 0.5,
          duration: 0.3,
          type: "tweet",
          ease: "easeIn",
        },
      };
    default:
      break;
  }
};

const clickStyle = () => {
  return {scale:.8,transition:{duration:.2,type:"spring",satisfies:300}}
};

export default ListItem;
