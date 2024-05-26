import { SkillBackground, SkillsContainer } from "@components";

const Skills = () => {
  document.body.style.backgroundColor = "var(--primary-color)";

  return (
    <>
      <SkillBackground />
      <SkillsContainer />
    </>
  );
};

export default Skills;
