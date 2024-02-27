import { motion } from "framer-motion"
import { Container,TextContainer, Text } from "./TextCircle.style"


const greetingText = 'Hello I am Paing sett kyaw'
const TextCircle = () => {
    const arr = Array.from(greetingText)
  return (
    <Container>
          <TextContainer key='TextCircle'  as={motion.div} initial={{rotate:0}} animate={{rotate:'-360deg',transition:{duration:10,repeat:Infinity,ease:"linear"}}}>
        {
            arr.map((t,i )=> {
            return <Text key={i} $index={11 * i}>{t}</Text>
         })
        }
    </TextContainer>
    </Container>
  )
}

export default TextCircle;