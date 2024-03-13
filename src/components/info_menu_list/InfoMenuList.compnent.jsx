/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import InfoList from "./InfoMenuList.style";

const InfoMenuList = ({title}) => {
  return (

      <InfoList
      as={motion.div}
        className="info_list"
        whileHover={{ scale: 1.1, transformOrigin: "right" }}
      >
        {title}
      </InfoList>
  );
};

export default InfoMenuList;
