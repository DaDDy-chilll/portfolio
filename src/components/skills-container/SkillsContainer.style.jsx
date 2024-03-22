import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .skill_lists,
  .skill_percent {
    width: 50%;
    height: 100%;
    position: relative;
  }

  .skill_lists .skill_item {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: red;
    position: relative;
    top: -50px;


    &::after {
      content: "";
      position: absolute;
      left: -50px;
      top: 50px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top-color: red;
    }

    p {
      color: white;
      position: absolute;
      top: 0%;
      left: 0;
      top: 24px;
    left: -20px;
    z-index: 1;
    }
  }
`;

export default Container;
