import { styled } from "styled-components";

const Menuicon = styled.div`
  width: 20%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all .2s;
  

  &:hover{

    & > div:nth-child(1){
        animation: hoverAni  .3s ease-out .1s infinite alternate-reverse;

    }
    & > div:nth-child(2){
        animation: hoverAni  .3s ease-out .2s infinite alternate-reverse;

    }
    & > div:nth-child(3){
        animation: hoverAni  .3s ease-out .3s infinite alternate-reverse;

    }
  }

  &:active{
    & > div {
      border: 2px solid black;
      background-color: ${props => props.$name === 'about' ? 'var(--secondary-color)':'var(--primary-color)'};

    }
  }

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.$name === 'about' ? 'var(--primary-color)':'var(--secondary-color)'};
  }
  

  @keyframes hoverAni {
    from{
        transform: translate(0);
    }
    to{
        transform: translateY(-10px);
    }
  }
`;

export { Menuicon };

