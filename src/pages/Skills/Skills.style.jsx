import { styled } from "styled-components";

const TriangleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  text-align: center;

  .triangle_container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .bottomtriangle {
      border-left: 500px solid transparent;
      border-right: 500px solid transparent;
      border-bottom: 400px solid var(--secondary-color);
      filter: drop-shadow(0 -10px white);
      margin-top: 0.5%;
    }

    .uptriangle {
      border-left: 500px solid transparent;
      border-right: 500px solid transparent;
      border-top: 400px solid var(--secondary-color);
      filter: drop-shadow(0 10px white);
      margin-bottom: 0.5%;
    }
  }

  .center_block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }
`;
export { TriangleContainer };
