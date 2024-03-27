import SkillList from "../skill-list/SkillList.component";
import Container from "./SkillsContainer.style";

const skills = [
  {
    id: 1,
    name: "HTML",
    top: "27%",
    left: "-4%",
  },
  {
    id: 2,
    name: "CSS",
    top: "-3%",
    left: "-4%",
  },
  {
    id: 3,
    name: "JS",
    top: "56%",
    left: "-4%",
  },
  {
    id: 4,
    name: "NODEJS",
    top: "-17.1%",
    left: "14%",
  },
  {
    id: 5,
    name: "REACTJS",
    top: "12%",
    left: "13%",
  },
  {
    id: 6,
    name: "JAVA",
    top: "41.5%",
    left: "14%",
  },
  {
    id: 7,
    name: "REACT NATIVE",
    top: "70.5%",
    left: "14%",
  },
  {
    id: 8,
    name: "MONGODB",
    top: "-3.2%",
    left: " 31%",
  },
  {
    id: 9,
    name: "MYSQL",
    top: "26.8%",
    left: "31%",
  },
  {
    id: 10,
    name: "FIRE BASE",
    top: "56.5%",
    left: "31%",
  },
  {
    id: 11,
    name: "FIGMA",
    top: "10.9%",
    left: "48.1%",
  },
  {
    id: 12,
    name: "AI",
    top: "42.5%",
    left: "48%",
  },
];

const SkillsContainer = () => {
  return (
    <Container>
      <div className="skill_lists">
        {skills.map((skill,i) => (
          <SkillList
            key={skill.id}
            name={skill.name}
            top={skill.top}
            left={skill.left}
            id={i+1}
          />
        ))}
      </div>
      <div className="skill_percent"></div>
    </Container>
  );
};

export default SkillsContainer;
