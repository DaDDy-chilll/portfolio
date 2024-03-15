import { styled } from "styled-components";

const Description = styled.div`
  padding-left: 5%;
  position: relative;


  p {
    font-size: 1.2rem;
    font-family: "Josefin Sans", sans-serif;
    align-self: flex-start;
  }
  .btn_gp{
    position: absolute;
    bottom: 20%;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

   .btn{
    font-family: "Madimi One", sans-serif;
    font-size: 1.2rem;
    padding: 1% 3%;
    margin: 1%;
    cursor: pointer;
    border-radius: 1vmax;
    transition: all .2s;
   }

   .cv_btn{
    color:white;
    background-color: #2b20fa;
    text-decoration: none;

    &:hover{
      color:#2b20fa;
    background-color: #808cff;
    }
   }

   .touch_btn{
    color:#2b20fa;
    background-color: white;
    border: 2px solid #2b20fa;
    &:hover{
      color:white;
    background-color: #2b20fa;
    }
   }
  }

`;

export default Description;
