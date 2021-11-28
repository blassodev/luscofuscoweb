import styled from 'styled-components';

export const MainContainer = styled.div`


`;

export const HorizontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20PX;
  div {
    max-width: 200px;
    text-align: center;
  }

`;

export const ImageIcon =  styled.img`
     width: 120px;
     height: auto;
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
  `;

export const ImagenGorda = styled.img`
    width: 100vw;
    height: auto;
  
`;
