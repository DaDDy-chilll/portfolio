import { styled } from "styled-components";

const AlertStyle = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.$windowWidth - 752 / 2}px;
  z-index: 99;
  filter: drop-shadow(0 18px 4px rgba(0, 0, 0, 0.25));

  .alert_container {
    position: relative;

    p {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      margin: 2% auto;
      width: 70%;
      text-align: center;
      color: white;
      font-family: "Monomaniac One", sans-serif;
      font-size: 1.4rem;
      overflow-x: auto;
      white-space: nowrap;
    }

    .close_btn{
        position: absolute;
        right: 2%;
        top: 10%;
        color: white;
        font-size: 1.7rem;
        cursor: pointer;

        &:hover{
            color: gray;
        }
    }
  }
`;

export default AlertStyle;
