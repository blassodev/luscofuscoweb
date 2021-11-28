import styled from "styled-components";
import back from "./img/background.png"

export const MainContainer = styled.div`
padding: 20px 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  background-image: url(${back});
  background-repeat: repeat;
  .cite {
    font-family: "Amatic SC",cursive;
    font-weight: 700;
    font-size: 27px;
  }
`;

export const Title = styled.b`
font-weight: bolder;
  color: #6c81f1;
  font-size: 17px;
  padding: 20px 0;
`;

export const Content = styled.p`
color: #7A7A7A;
  font-size: 16px;
  text-align: justify;
`;
