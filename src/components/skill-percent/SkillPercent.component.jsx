import { useSelector } from "react-redux";
import Precent from "./SkillPercent.style";

const SkillPercent = () => {
    const {precent} = useSelector(state => state.skillsState)
  return (
    <Precent>
      <div className="wave"></div>
    </Precent>
  );
};

export default SkillPercent;
