import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    width: 450px;
    height: max-content;
    padding: ${({theme}) => theme.size.big};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.size.big};
    border-radius: ${({theme}) => theme.size.big};
`;

export const Title = styled.h1`
    color: ${({theme}) => theme.purple};
`;

export const Subtitle = styled.span`
    color: ${({theme}) => theme.gray};
`;

export const Form = styled.form`
    width: 100%;
`;

