import { styled } from "styled-components";

const Container = styled.div`
  position: absolute;
  top: -212px;
  left: -41.997px;
  width: 30rem;
  height: 30rem;

  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 0%;
  height: 103%;
  position: relative;
  transform: scale(1.1);
`;

const Text = styled.span`
  transform-origin: 0 250px;
  transform: rotate(${(props) => props.$index}deg);
  position: absolute;
  color: black;
  font-size: 2rem;
  font-family: "Monomaniac One", sans-serif;
  text-transform: uppercase;
`;

export { Container, TextContainer, Text };
