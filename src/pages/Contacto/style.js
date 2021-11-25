import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
  flex-direction: column;
`;

export const TesDubidas = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const ThreeIcons = styled.div`
display: flex;
  justify-content: space-between;
  padding: 90px;
  font-family: 'Baloo Chettan 2', cursive;
  font-weight: 700;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    & > img {
      padding-bottom: 20px;
    }
    & > h2 {
      padding: 0;
      margin: 3px;
    }
  }
`;
