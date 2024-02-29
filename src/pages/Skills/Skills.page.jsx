import { BottomTriangle, CenterBlock, TopTriangle } from "@assets";
import { TriangleContainer } from "./Skills.style";

const Skills = () => {
  document.body.style.backgroundColor = "var(--primary-color)";

  return (
    <>
      <TriangleContainer>
        <div className="triangle_container">
          <div className="uptriangle"></div>
          <div className="bottomtriangle"></div>
        </div>
        <div className="center_block">
          <CenterBlock />
        </div>
      </TriangleContainer>
    </>
  );
};

export default Skills;
