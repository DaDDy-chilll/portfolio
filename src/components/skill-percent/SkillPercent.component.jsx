/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Precent from "./SkillPercent.style";

const SkillPercent = () => {
    const {activePrecent} = useSelector(state => state.skillsState);
  
  return (
    <Precent $activePrecent={activePrecent}>
      <div className="wave"></div>
      <div className="percent_text">{activePrecent}%</div>
    </Precent>
  );
};

export default SkillPercent;
