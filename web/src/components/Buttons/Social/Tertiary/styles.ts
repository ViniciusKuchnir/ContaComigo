import styled from 'styled-components';

export const Container = styled.div`
    width: max-content;
    display: flex;
    gap: ${({theme}) => theme.size.small};
    span{
     font-weight: 600;
    }
`;

export const Button = styled.button`
    width: max-content;
    border: none;
    color: ${({theme}) => theme.purple};
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 600;

    cursor: pointer;
    transition: .2s;

    &:hover{
        color: ${({theme}) => theme.purpleDark};
    }
    

`;