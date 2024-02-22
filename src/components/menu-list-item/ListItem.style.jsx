import {styled } from "styled-components";

const Container = styled.div`
  background-color: black;
  color: white;
  font-family: "Monomaniac One", sans-serif;
  font-size: 1.5rem;
  width: 12rem;
  height: 3rem;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 5px #878787;
  cursor: pointer;
  transition: all .2s;

  &:hover{
    background-color: white;
    color: black;
  }


`;

export { Container };
