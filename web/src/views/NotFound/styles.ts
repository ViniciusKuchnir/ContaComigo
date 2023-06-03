import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Number = styled.h1`
    font-size: 8rem;
    letter-spacing: 1rem;
    color: ${({theme}) => theme.purple};
`;

export const Message = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.7rem;
`;