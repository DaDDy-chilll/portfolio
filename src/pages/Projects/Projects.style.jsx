import { styled } from "styled-components";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    .project_card_conatiner{
      position: relative;
      width: 100%;
      height: 100%;

      display: flex;
      flex-wrap: wrap;
      overflow-y: scroll;
      scroll-behavior: smooth;
      padding: 1% 2%;

      .project_card{
        width: 23%;
        height: 50%;
        background-color: var(--secondary-color);
        margin: 1%;
        &:nth-child(even){
          margin-top: 7%;
        }
      }
    }
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url("/src/assets/img/project.jpg") center;
  z-index: -1;


  .projects_container{

  }
`;

export { Container, BackGround };
