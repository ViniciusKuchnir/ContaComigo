import styled from "styled-components";

export const Button = styled.button`
    height: 36px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: ${({theme}) => theme.size.small};
    border: none;
    background-color: ${({theme}) => theme.purple};
    color: ${({theme}) => theme.white};
    font-size: 1rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: .2s;

    &:hover{
        background-color: ${({theme}) => theme.purpleDark};
    }
    

`;