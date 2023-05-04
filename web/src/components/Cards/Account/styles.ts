import styled from "styled-components";

export const Container = styled.div`
    width: 322px;
    height: max-content;
    padding: ${({theme}) => theme.size.medium};
    margin-bottom: ${({theme}) => theme.size.medium};
    border-radius: ${({theme}) => theme.size.medium};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;

    &:hover{
        background-color: ${({theme}) => theme.purple};
        color: ${({theme}) => theme.white};
    }

    @media (max-width: 768px) {
        width: 366px;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`;  

export const Information = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

export const Label = styled.span`
    font-weight: 600;
`;

export const Data = styled.div`
    white-space: nowrap; 
    width: 100%; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;
