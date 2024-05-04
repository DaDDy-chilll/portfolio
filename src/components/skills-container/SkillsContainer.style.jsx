import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

  .skill_lists{
    width: 50%;
    height: 100%;
    position: relative;
  }

  .skill_percent{
    width: 210px;
    height: 210px;
    position: absolute;
    top: ${(window.innerHeight /2) - 100}px;
    right: 10%;
    transform: rotate(45deg);
    border: 2px solid var(--secondary-color);
  }
 
`;

export default Container;
