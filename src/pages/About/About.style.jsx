import { styled } from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  background: url("/src/assets/img/about.png") no-repeat;
  background-position-y: center;
  opacity: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-family: "Honk", system-ui;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1%;
  }

  .info {
    width: 86%;
    height: 67vh;
    background-color: white;
    z-index: 1;
    border-top-right-radius: 172px;
    border-bottom-left-radius: 172px;
    display: flex;
    justify-content: center;

    .profile_img {
      height: 100%;
    }
  }
`;

export { Container, InfoContainer };
