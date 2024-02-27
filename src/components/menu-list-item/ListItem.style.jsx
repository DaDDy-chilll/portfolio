import { css, styled } from "styled-components";

const Container = styled.div`
  font-family: "Monomaniac One", sans-serif;
  font-size: 1.5rem;
  width: 12rem;
  height: 3rem;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 10px 5px #878787; */
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  /* box-shadow: ${props => props.$name ? '0 10px 5px var(--primary-color)':'0 10px 5px var(--secondary-color)'}; */

  &:hover {
    background-color: white;
    color: black;
  }

  ${(porps) => {
    if (porps.$name === "about") {
      return css`
        background-color: var(--primary-color);
      `;
    } else {
      return css`
        background-color: var(--secondary-color);
      `;
    }
  }}

  ${(porps) => {
    if (porps.$active) {
      return css`
        border: 3px solid black;
        background-color: white;
        color: black;
      `;
    } else {
      return css`
        color: white;
        background-color: black;
      `;
    }
  }}
`;

export { Container };
