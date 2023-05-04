import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.aside`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${({theme}) => theme.purple};
    padding: ${({theme}) => theme.size.big};
    font-size: 1.7rem;
`;

export const ItemMenu = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({theme}) => theme.white};

    &:hover{
        color: ${({theme}) => theme.purpleDark};
    }

    span{
        font-size: 1rem;
    }
`;