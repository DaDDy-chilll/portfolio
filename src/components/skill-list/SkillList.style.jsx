import { styled } from "styled-components";

const List = styled.div`
     width: 32%;
    height: 27%;
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};

  .skill_item {
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: white;
      z-index: 1;
    }
  }
`;

export default List;
