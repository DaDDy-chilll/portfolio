import {styled} from 'styled-components'

const Precent = styled.div`
 width: 300px;
    height: 300px;
    margin: 0 5% 10%;
    border-radius: 100%;
    border: 2px solid var(--secondary-color);
    overflow: hidden;
    position: relative;

    .wave {
      position: relative;
      top: 0;
      width: 100%;
      height: 100%;
      background: var(--secondary-color);
      border-radius: 50%;
      box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.5);

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%; //change skill percent
        left: 50%;
        width: 200%;
        height: 200%;
        background: black;
        transform: translate(-50%, -75%);
      }
      &:before {
        border-radius: 45%;
        background: rgba(255, 255, 255, 1);
        animation: animate 5s linear infinite;
      }
      &:after {
        border-radius: 40%;
        background: rgba(255, 255, 255, 0.5);
        animation: animate 10s linear infinite;
      }

      @keyframes animate {
        0% {
          transform: translate(-50%, -75%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -75%) rotate(360deg);
        }
      }
    }

`
export default Precent;