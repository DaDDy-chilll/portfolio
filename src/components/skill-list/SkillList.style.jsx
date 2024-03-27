import { styled } from "styled-components";

const List = styled.div`
  width: 32%;
  height: 27%;
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  .skill_item {
    width: 100%;
    height: 100%;
    background-color:${props => props.$isActive ? 'var(--primary-color)': 'var(--secondary-color)'} ;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    border: ${props => props.$isActive ? '10px solid var(--secondary-color)': null};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.2s;

    .icon{
      width: 20%;
    }

    p {
      color: white;
      font-family: "Monomaniac One", sans-serif;
      font-size: 1.6rem;
      transition: all 0.2s;
    }

    &:hover p {
      color: var(--secondary-color);
      font-size: 2rem;
    }

    &:hover {
      background-color: var(--primary-color);
      border: 10px solid var(--secondary-color);
      transform: scale(1.1);
    }

    &:active{
      transform: scale(.9);
    }
    
  }
`;

export default List;
