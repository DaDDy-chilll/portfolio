import {styled} from 'styled-components'
const windowHeight = window.innerHeight()/2
console.log(windowHeight);
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: absolute;
    right: 1%;
    top: ${windowHeight/2 }px; 
`

export {Wrapper}