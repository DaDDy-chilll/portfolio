import { styled } from "styled-components";

const Container = styled.div``;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url("/src/assets/img/project.jpg") center;
  z-index: -1;
`;

export { Container, BackGround };
