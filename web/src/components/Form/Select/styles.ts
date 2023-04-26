import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${({theme}) => theme.size.big};
`;

export const Label = styled.label`
    font-size: 1rem;
    margin-bottom: ${({theme}) => theme.size.small};
    padding-left: ${({theme}) => theme.size.medium};
    letter-spacing: 1px;

    span{
        color: ${({theme}) => theme.gray};
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 36px;
    font-size: 1rem;
    background-color: transparent;
    padding: ${({theme}) => theme.size.small};
    margin-bottom: ${({theme}) => theme.size.small};
    border: 2px solid ${({theme}) => theme.purple};
    border-radius: ${({theme}) => theme.size.small};
`;

export const Error = styled.span`
    font-size: 0.9rem;
        padding-left: ${({theme}) => theme.size.medium};
        color: ${({theme}) => theme.red};
        font-weight: 500;
`;
