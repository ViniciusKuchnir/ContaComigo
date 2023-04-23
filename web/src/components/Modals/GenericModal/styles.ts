import styled, { keyframes } from "styled-components";

const topToBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-500px);
  } 
  100% {
    opacity: 1;
  }
`;




export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: ${({theme}) => theme.background};
    width: 50%;
    height: max-content;
    padding: ${({theme}) => theme.size.big};
    border-radius: ${({theme}) => theme.size.big};
    animation: ${topToBottom} .3s ease-in-out; 
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({theme}) => theme.size.big};
`;

export const CloseButton = styled.div`
    cursor: pointer;
`;