import MenuButton from "../menubutton/MenuButton.component"
import { Nav } from "./Navbar.style"


const Navbar = () => {
  return (
    <Nav>
        <a href="/">Logo</a>
        <MenuButton />
    </Nav>
  )
}

export default Navbar