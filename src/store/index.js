import { downloadCV, menuOpen } from "./features/about";
import { isMenuOpen } from "./features/home";
import { changeInfo } from "./features/pageInfo";
import { skillActive } from "./features/skills";
import { store } from "./features/store";

export default store;
export {
    changeInfo,
    isMenuOpen,
    menuOpen,
    downloadCV,
    skillActive
}