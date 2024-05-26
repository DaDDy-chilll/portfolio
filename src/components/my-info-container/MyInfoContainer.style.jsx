import { styled } from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  h1 {
    font-family: "Honk", system-ui;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1%;
    white-space: nowrap;
    text-align: center;
  }

  .info {
    width: 82%;
    height: 67vh;
    background-color: white;
    z-index: 1;
    border-top-right-radius: 172px;
    border-bottom-left-radius: 172px;
    display: flex;
    justify-content: center;
    margin-left: 7%;
    overflow: hidden;

    .profile_img {
      height: 100%;
    }
  }

  .info_menu {
    position: absolute;
    top: 72px;
    left: 0px;
    text-align: end;
    z-index: 10;
    width: 15%;

    display: flex;
    align-items: end;
    flex-direction: column;
  }
`;
export { InfoContainer };
