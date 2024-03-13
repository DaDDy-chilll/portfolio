/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import InfoList from "./InfoMenuList.style";
import { useDispatch } from "react-redux";
import { menuOpen } from "@store";
const InfoMenuList = ({title,i,active}) => {
  const dispatch = useDispatch();
  const menuHandler = () => dispatch(menuOpen(i));
  return (
      <InfoList
      as={motion.div}
        className="info_list"
        whileHover={{ scale: 1.1}}
        onClick={menuHandler}
        key={title}
        isActive={active}
      >
        {title}
      </InfoList>
  );
};

export default InfoMenuList;
