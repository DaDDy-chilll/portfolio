import { NavLine } from "assets";
import MenuButton from "../menubutton/MenuButton.component";
import { Wrapper } from "./Menu.style";
import Time from "../time/Time.component";

const Menu = () => {
  return (
    <Wrapper>
      <Time />
      <NavLine />
      <MenuButton />
    </Wrapper>
  );
};

export default Menu;
