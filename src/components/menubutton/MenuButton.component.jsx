import { motion } from "framer-motion";
import { Menuicon } from "./MenuButton.style";
import { useDispatch, useSelector } from "react-redux";
import { isMenuOpen } from "@store";

const MenuButton = () => {
  const {pageTitle} = useSelector(state => state.pageInfo);
  const disptach = useDispatch();
  const clickhandle = () => disptach(isMenuOpen());

  return (
    <Menuicon
      as={motion.div}
      initial={{ x: "500px" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      onClick={clickhandle}
      $name={pageTitle}
      key='MenuButton'
    >
      <div></div>
      <div></div>
      <div></div>
    </Menuicon>
  );
};

export default MenuButton;
