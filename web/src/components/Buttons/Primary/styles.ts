import styled from "styled-components";

type Button = {
    loading: number
}

export const Button = styled.button<Button>`
    height: 36px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: ${({theme}) => theme.size.big};
    border-radius: ${({theme}) => theme.size.small};
    border: none;
    background-color: ${p => p.loading ? p.theme.gray : p.theme.purple};
    color: ${({theme}) => theme.white};
    font-size: 1rem;
    letter-spacing: 1px;
    cursor: ${p => p.loading ? 'progress' : 'pointer'};
    transition: .2s;

    &:hover{
        background-color: ${p => p.loading ? p.theme.gray : p.theme.purpleDark};
    }
    

`;