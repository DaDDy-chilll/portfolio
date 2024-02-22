import { LOGO } from "@assets";
import Menu from "../menu/Menu.component";
import { Nav } from "./Navbar.style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <LOGO />
      </Link>
      <Menu />
    </Nav>
  );
};

export default Navbar;
