import { PageTitleTail, PageTitleHead } from "@assets";
import { Wrapper } from "./PageTitle.style";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const PageTitle = ({ pageTitle }) => {
  const words = Array.from([...pageTitle]);
  const height = window.innerHeight / 2 / 2;
  return (
    <Wrapper height={height}>
      <PageTitleTail />
      <span>
        {words.map((w, i) => (
          <motion.p
            key={i}
            initial={{ x: "100px" }}
            animate={{ x: 0 }}
            transition={{ delay: `.${i}`, duration: 0.5, ease: "easeIn" }}
          >
            {w}
          </motion.p>
        ))}
      </span>
      <PageTitleHead />
    </Wrapper>
  );
};

export default PageTitle;
