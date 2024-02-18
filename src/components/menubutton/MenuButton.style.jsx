import { styled } from "styled-components";

const Menuicon = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  cursor: pointer;

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

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: black;

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
