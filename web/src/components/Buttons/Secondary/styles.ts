import styled from "styled-components";

export const Button = styled.button`
    height: 36px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.size.medium};
    margin-bottom: ${({theme}) => theme.size.big};
    border-radius: ${({theme}) => theme.size.small};
    border: 2px solid ${({theme}) => theme.purple};
    background-color: transparent;
    color: ${({theme}) => theme.purple};
    font-size: 1rem;
    letter-spacing: 1px;
    cursor: pointer;

`;