import { styled } from "styled-components";

const TriangleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  text-align: center;

.triangle_container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .bottomtriangle{
  width: 0;
    height: 300px;
    border-left: 500px solid transparent;
    border-right: 500px solid transparent;
    border-bottom: 400px solid #555;
}

.uptriangle{
  width: 0;
    height: 300px;
    border-left: 500px solid transparent;
    border-right: 500px solid transparent;
    border-top: 400px solid #555;
}
}

.center_block{
  width: 100%;
  height: 100vh;
  background-color: red;
}
`;
export { TriangleContainer };
