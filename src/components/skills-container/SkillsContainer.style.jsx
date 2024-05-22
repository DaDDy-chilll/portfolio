import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */

  .skill_lists {
    width: 50%;
    height: 100%;
    position: relative;
  }

  .skill_percent {
    width: 300px;
    height: 300px;
    margin: 0 5% 10%;
    border-radius: 100%;
    border: 2px solid var(--secondary-color);
    overflow: hidden;
    position: relative;

    .wave {
      @keyframes wave {
        0% {
          margin-left: 0;
        }
        100% {
          margin-left: -1000%;
        }
      }

      @keyframes swell {
        0%,
        100% {
          transform: translate3d(0, -25px, 0);
        }
        50% {
          transform: translate3d(0, 5px, 0);
        }
      }

      &:nth-child(1) {
        background: url("/src/assets/img/wave1.svg");
        background-repeat: repeat-x;
        position: absolute;
        bottom: 0;
        width: 1000%;
        height: 60%;
        /* animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite; */
        transform: translateX(0) translate3d(0, 0, 0);
        background-color: red;
        opacity: 0.8;

      }

      &:nth-child(2) {
        background: url("/src/assets/img/wave2.svg") repeat-x;
        position: absolute;
        bottom: 0;
        width: 1000%;
        height: 30%;
        /* animation: wave 25s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite; */
        opacity: 0;
        transform: translateX(0) translate3d(0, 0, 0);
      }
    }
  }
`;

export default Container;
