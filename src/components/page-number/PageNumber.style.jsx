import { styled } from "styled-components";
const Number = styled.div`
  position: absolute;
  bottom: 2%;
  left: ${(props) => props.$windowwidth}px;
  z-index: 10;

  display: flex;
  justify-content: center;
  .number {
    font-family: "Monomaniac One", sans-serif;
    font-size: 3rem;
    user-select: none;
    color: white;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
    margin: 0 5%;
    padding: 0;
    height: auto;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    border-radius: 5px;

    .icon {
      color: var(
        ${(props) =>
          props.$name === "about" ? "--primary-color" : "--secondary-color"}
      );
    }

    &:hover {
      background-color: var(
        ${(props) =>
          props.$name === "about" ? "--primary-color" : "--secondary-color"}
      );
      .icon {
        color: var(
          ${(props) =>
            props.$name === "about" ? "--secondary-color" : "--primary-color"}
        );
      }
    }
  }
`;

export { Number };
