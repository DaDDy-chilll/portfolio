import { motion } from "framer-motion";
import ListItem from "../menu-list-item/ListItem.component";
import { Container } from "./MenuList.style";
import { useSelector } from "react-redux";

const menus = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "skills", path: "/skills" },
  { id: 4, name: "projects", path: "/projects" },
  { id: 5, name: "contact", path: "/contact" },
];

const MenuList = () => {
  const {isOpen} = useSelector(state => state.homeState)

  return (
    <Container as={motion.div} initial={false} animate={{visibility:isOpen ? "visible":"hidden"}}>
      {menus.map((menu) => (
        <ListItem
          key={menu.id}
          id={menu.id}
          name={menu.name}
          path={menu.path}
        />
      ))}
      {/* <ListItem
          key={1}
          id={1}
          name="home"
          path="/"
        /> */}
    </Container>
  );
};

export default MenuList;
