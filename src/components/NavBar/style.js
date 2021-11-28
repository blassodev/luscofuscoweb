import styled from "styled-components";

export const MainContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  img {
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
    }
    &:active {
      transform: translateY(5px);
    }
  }
`;

export const PreNav = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px dotted #6c81f1;
  a {
    color: black;
    text-decoration: none;
  }
`;



export const NavButtons = styled.ul`
display: flex;
  justify-content: space-around;
  list-style: none;
  li {
    padding: 20px;
    a {
      text-decoration: none;
      color: #444;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      position: relative;
      &:hover{
        &:after{
          opacity: 1;
          visibility: visible;
          transform: translate(-50%,-50%) scale(1.1) rotate(
                  20deg);
        }
      }
      &:after {
        content: '';
        display: block;
        width: 38px;
        height: 38px;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        background: url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 x=%220px%22 y=%220px%22 width=%2238px%22 height=%2238px%22 viewBox=%220 0 102 102%22 xml:space=%22preserve%22%3E%3Cpath fill=%22%23eec5f6%22 d=%22M72.434,95.811c0,0,41.985-13.987,20.969-67.473c-21.017-53.486-52.713-10.31-64.487-15.001 C7.479,4.795-1.051,55.257,4.631,67.678C11.792,83.332,15.192,111.994,72.434,95.811z%22/%3E%3C/svg%3E") no-repeat center;
        transition: .3s cubic-bezier(.43,.41,.36,.9);
        transform: translate(-50%,-50%) scale(1) rotate(0);
        opacity: 0;
        visibility: hidden;

      }
    }

  }
`;

