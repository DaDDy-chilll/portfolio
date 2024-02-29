import {styled} from 'styled-components'

const ContactBackground = styled.div`
    perspective: 1000px;
    perspective-origin: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    z-index: -1;
`

export {ContactBackground}