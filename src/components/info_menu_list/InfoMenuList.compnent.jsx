/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import InfoList from "./InfoMenuList.style";
import { useDispatch } from "react-redux";
import { menuOpen } from "@store";
const InfoMenuList = ({title,i,active}) => {
  const dispatch = useDispatch();
  const menuHandler = () => dispatch(menuOpen(i));
  const listAni = {
    hidden:{
      x:-300,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      transition:{delay:1.5 + +(`0.${i}`) ,duration:0.2,type:'tween',stiffness:500}
    }
  }

  return (
      <InfoList
      as={motion.div}
        className="info_list"
        whileHover={{ scale: 1.1}}
        onClick={menuHandler}
        key={title}
        isActive={active}
        variants={listAni}
        initial='hidden'
        animate='visible'
      >
        {title}
      </InfoList>
  );
};

export default InfoMenuList;
