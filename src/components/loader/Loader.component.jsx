import { Loader } from "@assets";
import Wrapper from "./Loader.style";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <Wrapper
      as={motion.div}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { ease: "easeIn", type: "spring", stiffness: 200 },
      }}
    >
      <Loader />
    </Wrapper>
  );
};

export default Loading;
