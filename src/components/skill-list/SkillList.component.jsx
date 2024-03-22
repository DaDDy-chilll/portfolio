import List from "./SkillList.style";

/* eslint-disable react/prop-types */

const SkillList = ({ name,top,left }) => {
  return (
 
      <List $top={top} $left={left}>
        <div className="skill_item">
          <p>{name}</p>
        </div>
      </List>

  );
};

export default SkillList;
