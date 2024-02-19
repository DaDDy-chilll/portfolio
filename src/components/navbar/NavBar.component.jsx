import { LOGO } from "@assets"
import Menu from "../menu/Menu.component"
import { Nav } from "./NavBar.style"



const Navbar = () => {
  return (
    <Nav>
        <a href="/"><LOGO /></a>
        <Menu />
    </Nav>
  )
}

export default Navbar