import { downloadCV, menuOpen } from "./features/about";
import { isMenuOpen } from "./features/home";
import { changeInfo } from "./features/pageInfo";
import { skillActive } from "./features/skills";
import { openAlert, closeAlert } from "./features/alert";
import { store } from "./features/store";

export default store;
export {
  changeInfo,
  isMenuOpen,
  menuOpen,
  downloadCV,
  skillActive,
  openAlert,
  closeAlert,
};
