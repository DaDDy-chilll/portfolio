import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 5%;

  .project_card_conatiner {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding: 1% 2%;

    .project_card {
      width: 23%;
      height: 50%;
      background-color: var(--secondary-color);
      margin: 1%;
      position: relative;
      color: white;

      &:nth-child(even) {
        margin-top: 7%;
      }

      img{
        margin: 10% 0 0 5%;
      }
      
      .title {
        position: absolute;
        top: 2%;
        right: 5%;
        font-family: "Monomaniac One", sans-serif;
        text-transform: capitalize;
        font-size: 2rem;
        margin: 0;
      }

      .tools{
        display: flex;
        justify-content: center;
        align-items: end;
        flex-direction: column;
        background-color: red;

        p{
          margin: 0;
        }
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
