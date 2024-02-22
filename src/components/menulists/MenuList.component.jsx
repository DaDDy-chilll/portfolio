import ListItem from "../menu-list-item/ListItem.component";
import { Container } from "./MenuList.style";

const menus = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "skills", path: "/skills" },
  { id: 4, name: "projects", path: "/projects" },
  { id: 5, name: "contact", path: "/contact" },
];

const MenuList = () => {
  return (
    <Container>
      {menus.map((menu) => (
        <ListItem
          key={menu.id}
          id={menu.id}
          name={menu.name}
          path={menu.path}
        />
      ))}
    </Container>
  );
};

export default MenuList;
