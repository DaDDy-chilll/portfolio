import {styled} from 'styled-components'

const ContactStyle = styled.div`
   height: 100vh;
    width: 100%;



    .contact_form{
        /* background-color: white; */
        width: 51%;
        height: 67%;
        margin: 3% auto;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 0 1%;
   

        input{
            width: 100%;
            height: 10vh;
            font-size: 2rem;
            margin: 1% 0;
            font-family: "Monomaniac One", sans-serif;
            border: none;
            outline: none;
            padding: 0 1%;

            &:nth-child(2){
                font-size: 1.7rem;
            }

        }
        textarea{
            width: 100%;
            height: 35vh;
            font-size: 1.4rem;
            text-align: start;
            resize: none;
            margin: 1% 0;
            font-family: "Monomaniac One", sans-serif;
            font-weight:200;
            outline: none;
            padding: 0 1%;

        }

        button{
            font-size: 1.7rem;
            text-transform: uppercase;
            font-family: "Monomaniac One", sans-serif;
            letter-spacing: 2px;
            padding: 0 10%;
            cursor: pointer;
            background-color: white;
            border: none;
            transition: all .1s ;
            
            &:hover{
                animation: sendBtn 1s ease-out infinite alternate-reverse;
            }

            @keyframes sendBtn {
                from{
                    letter-spacing: 0;
                }

                to{
                    letter-spacing: 10px;
                }
            }

            &:active{
                transform: translateY(5px);
            }
        }   
    }

`

export default ContactStyle;