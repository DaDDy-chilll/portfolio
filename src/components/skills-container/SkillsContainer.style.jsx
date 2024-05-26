import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* background-color: red; */
  /* flex-wrap: wrap; */

  .skill_lists {
    width: 50%;
    height: 100%;
    position: relative;
  }

  .see_more {
    position: absolute;
    left: ${(props) => props.$windowWidth - 253 / 2}px;
    bottom: 24%;
    width: 253px;
    height: 202px;
    background-color: var(--primary-color);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-family: "Monomaniac One", sans-serif;
    border: none;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      color: var(--primary-color);
      background-color: var(--secondary-color);
      border: 20px solid white;
    }

    &:active {
      transform: translateY(5px);
    }
  }
`;

export default Container;
