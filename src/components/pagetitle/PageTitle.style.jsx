import {styled} from 'styled-components'

const Wrapper = styled.div`
  

span{
    text-align: center;
}

p{
    text-transform: uppercase;
    font-family: "Monomaniac One", sans-serif;
    font-weight: bolder;
    font-size: 1.2rem;
    margin: 20% 0;
}


    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: absolute;
    right: 2%;
    /* top:${props => props.height}px */
height: calc(100% - 67px);

`

export {Wrapper}