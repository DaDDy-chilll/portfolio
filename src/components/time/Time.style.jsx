import { css, styled } from "styled-components";

const Wrapper = styled.div`
  color: white;
  font-family: "Monomaniac One", sans-serif;
  font-size: 1.5rem;
  padding: 1% 2%;
  border-radius: 5px;
  user-select: none;

  ${(props) => {
    if (props.$name === "about") {
      return css`
        background-color: var(--primary-color);
        color: var(--secondary-color);
      `;
    } else {
      return css`
        background-color: var(--secondary-color);
        color: var(--primary-color);
      `;
    }
  }}
`;

export { Wrapper };
