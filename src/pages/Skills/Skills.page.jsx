import { BottomTriangle, CenterBlock, TopTriangle } from "@assets";
import {TriangleContainer} from "./Skills.style";


const Skills = () => {
  document.body.style.backgroundColor='var(--primary-color)';

  return (
    <>
      <TriangleContainer>
        <TopTriangle className='top' />
        <BottomTriangle className='bottom' />
      </TriangleContainer>
    </>
  )
}

export default Skills