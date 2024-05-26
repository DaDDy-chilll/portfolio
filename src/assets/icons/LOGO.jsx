import { motion } from "framer-motion";
import { useSelector } from "react-redux";
// import pageInfo from "@store";

export const LOGO = () => {
  const { pageTitle } = useSelector((state) => state.pageInfo);
  return (
    <motion.svg
      key="LOGO"
      width="40"
      height="52"
      viewBox="0 0 117 129"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ y: "-100px" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <path
        d="M56.0959 128.575V20.495L28.8493 0L0 18.5431V59.5331L28.0479 79.0522L46.4795 66.3648L35.2603 79.0522V112.235L46.4795 128.575H56.0959Z"
        fill={pageTitle === "about" ? "white" : "#272727"}
      />
      <path
        d="M26.731 13.6633L42.9407 25.0608V47.8558L26.731 59.2533L10.5213 47.8558V25.0608L26.731 13.6633Z"
        fill={pageTitle === "about" ? "#272727" : "white"}
      />
      <path
        d="M60.9041 128.575V20.495L88.1507 0L117 18.5431V59.5331L88.9521 79.0522L70.5205 66.3648L81.7397 79.0522V112.235L70.5205 128.575H60.9041Z"
        fill={pageTitle === "about" ? "white" : "#272727"}
      />
      <path
        d="M90.269 13.6633L74.0593 25.0608V47.8558L90.269 59.2533L106.479 47.8558V25.0608L90.269 13.6633Z"
        fill={pageTitle === "about" ? "#272727" : "white"}
      />
    </motion.svg>
  );
};
