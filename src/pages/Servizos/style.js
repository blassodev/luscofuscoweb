import styled from 'styled-components';
import back from '../Metodoloxia/img/background.png';

export const MainContainer = styled.div`
  background-image: url(${back});
  background-repeat: repeat;

`;

export const NosoHorario = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 47px;
  }
  h2 {
    font-family: "Amatic SC",cursive;
    font-size: 27px;
  }
  h3 {
    font-size: 26px;
    color: #7789F2;
    margin: 0;
  }
  .content {
    font-size: 16px;
  }
  
`;

export const Horarios = styled.div`
display: flex;
  div {
    padding: 20px;
    text-align: center;
    img {
      animation: bounce 4s infinite;
      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
  }
`;

export const Alimnacion = styled.div`
padding-left: 20vw;
padding-right: 4cm;
text-align: justify;
  h1 {
    font-size: 47px;
  }
  h2 {
    font-family: "Amatic SC",cursive;
    font-size: 27px;
  }
  h3 {
    font-size: 26px;
    color: #7789F2;
    margin: 0;
  }
  .content {
    font-size: 16px;
  }
`;
