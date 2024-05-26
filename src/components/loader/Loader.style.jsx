import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #5f5f5f;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  z-index: -1;
`;

export default Wrapper;
