import { motion } from "framer-motion";
import { Menuicon } from "./MenuButton.style";


const MenuButton = () => {
    return(
        <Menuicon as={motion.div} initial={{x:'500px'}} animate={{x:0}} transition={{delay:.3,type:'spring',stiffness:100}}>
        <div></div>
        <div></div>
        <div></div>
    </Menuicon>
    )
}

export default MenuButton;