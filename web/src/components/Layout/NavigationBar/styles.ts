import styled from "styled-components";

export const Container = styled.aside`
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme}) => theme.size.big};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: ${({theme}) => theme.purple};
    padding: ${({theme}) => theme.size.big};
    border-radius: ${({theme}) => theme.size.medium};
    font-size: 1.7rem;
`;

export const Tooltip = styled.div`
    position: relative;
    display: flex;
    align-items: baseline;
    cursor: pointer;

    span{
        visibility: hidden;
        width: max-content;
        height: max-content;
        background-color: ${({theme}) => theme.purple};
        color: ${({theme}) => theme.white};
        font-size: 1.1rem;
        text-align: center;
        padding: ${({theme}) => theme.size.small} 16px;
        border-radius: ${({theme}) => theme.size.medium};
        position: absolute;
        z-index: 1;
        top: -2px;
        left: 105%;
    }


    &:hover span{
        visibility: visible;
    }
`;