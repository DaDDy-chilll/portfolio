import { styled } from "styled-components";

const Circl = styled.div`
  z-index: 1;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .half_circle {
    width: 25rem;
    height: 14rem;
    border-radius: 0 0 15rem 15rem;
    background-color: #272727;
  }
`;

export { Circl };
