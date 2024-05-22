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
    top: "26%",
    left: "-7%",
    icon: <HtmlIcon />,
  },
  {
    id: 2,
    name: "CSS",
    top: "-3.3%",
    left: "-6.5%",
    icon:<CssIcon />,
  },
  {
    id: 3,
    name: "JS",
    top: "55%",
    left: "-7%",
    icon:<JsIcon />,
  },
  {
    id: 4,
    name: "NODEJS",
    top: "-18%",
    left: "11%",
    icon:<NodejsIcon />,
  },
  {
    id: 5,
    name: "REACTJS",
    top: "11.5%",
    left: "11%",
    icon:<ReactIcon />
  },
  {
    id: 6,
    name: "JAVA",
    top: "40.5%",
    left: "11%",
    icon:<JavaIcon />,
  },
  {
    id: 7,
    name: "REACT NATIVE",
    top: "70.5%",
    left: "10%",
    icon:<ReactIcon />,
  },
  {
    id: 8,
    name: "MONGODB",
    top: "-3.5%",
    left: " 28.5%",
    icon:<MongoIcon />
  },
  {
    id: 9,
    name: "MYSQL",
    top: "26.2%",
    left: "29%",
    icon:<MysqlIcon />,
  },
  {
    id: 10,
    name: "FIRE BASE",
    top: "56%",
    left: "28%",
    icon:<FirebaseIcon />,
  },
  {
    id: 11,
    name: "FIGMA",
    top: "10.9%",
    left: "46.1%",
    icon:<FigmaIcon />
  },
  {
    id: 12,
    name: "AI",
    top: "41.5%",
    left: "46%",
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
      <div className="skill_percent">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </Container>
  );
};

export default SkillsContainer;
