import styled from "styled-components";
import { MdSearch } from 'react-icons/md';

export const Container = styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    margin-bottom: ${({theme}) => theme.size.big};
    padding-left: ${({theme}) => theme.size.small};
    padding-right: ${({theme}) => theme.size.medium};
    font-size: 1rem;
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.purple};
    border-radius: ${({theme}) => theme.size.small};

    input{
        width: 100%;
        height: 100%;
        padding: ${({theme}) => theme.size.medium};
        font-size: 1rem;
        border: none;
        background-color: transparent;
        ::placeholder{
            color: ${({theme}) => theme.gray};
        }
    }  

`;

export const Icon = styled(MdSearch)`
    background-color: transparent;
    font-size: 24px;
    color: ${({theme}) => theme.gray};

`;

