import SkillList from "../skill-list/SkillList.component";
import Container from "./SkillsContainer.style";
import { useSelector } from "react-redux";
import {
  AiIcon,
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  MongoIcon,
  MysqlIcon,
  NodejsIcon,
  ReactIcon,
} from "@assets";

const skills = [
  {
    id: 1,
    name: "HTML",
    top: "27%",
    left: "-4%",
    icon: <HtmlIcon />,
  },
  {
    id: 2,
    name: "CSS",
    top: "-3%",
    left: "-4%",
    icon:<CssIcon />,
  },
  {
    id: 3,
    name: "JS",
    top: "56%",
    left: "-4%",
    icon:<JsIcon />,
  },
  {
    id: 4,
    name: "NODEJS",
    top: "-17.1%",
    left: "14%",
    icon:<NodejsIcon />,
  },
  {
    id: 5,
    name: "REACTJS",
    top: "12%",
    left: "13%",
    icon:<ReactIcon />
  },
  {
    id: 6,
    name: "JAVA",
    top: "41.5%",
    left: "14%",
    icon:<JavaIcon />,
  },
  {
    id: 7,
    name: "REACT NATIVE",
    top: "70.5%",
    left: "14%",
    icon:<ReactIcon />,
  },
  {
    id: 8,
    name: "MONGODB",
    top: "-3.2%",
    left: " 31%",
    icon:<MongoIcon />
  },
  {
    id: 9,
    name: "MYSQL",
    top: "26.8%",
    left: "31%",
    icon:<MysqlIcon />,
  },
  {
    id: 10,
    name: "FIRE BASE",
    top: "56.5%",
    left: "31%",
    icon:<FirebaseIcon />,
  },
  {
    id: 11,
    name: "FIGMA",
    top: "10.9%",
    left: "48.1%",
    icon:<FigmaIcon />
  },
  {
    id: 12,
    name: "AI",
    top: "42.5%",
    left: "48%",
    icon:<AiIcon />
  },
];

const SkillsContainer = () => {
  const { activeName } = useSelector((state) => state.skillsState);
  return (
    <Container>
      <div className="skill_lists">
        {skills.map((skill, i) => (
          <SkillList
            key={skill.id}
            name={skill.name}
            top={skill.top}
            left={skill.left}
            id={i + 1}
            isActive={activeName === skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
      <div className="skill_percent"></div>
    </Container>
  );
};

export default SkillsContainer;
