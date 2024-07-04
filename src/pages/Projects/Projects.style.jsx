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
      transition: all 0.2s;
      border: 2px solid var(--secondary-color);
      cursor: pointer;
      
      &:nth-child(even) {
        margin-top: 7%;
      }

      &:hover {
        background-color: var(--primary-color);

         .title {
          color: var(--secondary-color);
         }

         .tools{
          p{
            color: var(--primary-color);
            background-color: var(--secondary-color);
          }
         }
      }

      img {
        /* margin: 15% 0 0 5%; */
        position: absolute;
        bottom: 10%;
        left: 5%;
        user-select: none;
      }

      .title {
        position: absolute;
        top: 5%;
        right: 5%;
        font-family: "Monomaniac One", sans-serif;
        text-transform: capitalize;
        font-size: 1.4rem;
        margin: 0;
        font-weight: bold;
      }

      .tools {
        display: flex;
        justify-content: center;
        align-items: end;
        flex-direction: column;
        position: absolute;
        right: 10px;
        bottom: 10px;

        p {
          margin: 5% 0;
          background-color: white;
          color: var(--secondary-color);
          border-radius: 50px;
          border-radius: 50px;
          padding: 2px 10px;
          font-size: 1.1rem;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          text-transform: capitalize;
          user-select: none;
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
