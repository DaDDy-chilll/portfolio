import { LOGO } from "@assets";
import Menu from "../menu/Menu.component";
import { Nav } from "./Navbar.style";
import { motion } from "framer-motion";

const Navbar = () => {

  return (
    <Nav>
      <motion.a href="/" initial={{y:'-100px'}} animate={{y:0}} transition={{type:"spring", stiffness:100}}  >
        <LOGO />
      </motion.a>
      <Menu />
    </Nav>
  );
};

export default Navbar;
