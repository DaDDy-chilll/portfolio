import { styled } from "styled-components";

const Number = styled.div`
  position: absolute;
  bottom: 2%;
  left: ${(props) => props.windowwidth}px;
  font-family: "Monomaniac One", sans-serif;
  font-size: 3rem;

  color: white;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: black;
`;

export { Number };
