import {styled} from 'styled-components'

const InfoList = styled.div`
      background-color: ${porps => porps.isActive ? 'white':'#3e3e3e'};
      color: ${porps => porps.isActive ? '#3e3e3e':'white'};
      border:  ${porps => porps.isActive ? '1px solid #3e3e3e':null};
      font-size: 1.1rem;
      padding: 3%;
      margin: 2% 0;
      cursor: pointer;
      transition: all 0.2s;
      font-family: "Madimi One", sans-serif;

      &:hover {
        color: #3e3e3e;
        background-color: white;
        border: 1px solid #3e3e3e;
      }

      

`
export default InfoList;