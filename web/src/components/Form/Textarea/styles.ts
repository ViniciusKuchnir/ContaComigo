import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: ${({theme}) => theme.size.small};
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

export const Textarea = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    height: 60px;
    max-height: 180px;
    font-size: 1rem;
    background-color: transparent;
    padding: ${({theme}) => theme.size.medium};
    border: 2px solid ${({theme}) => theme.purple};
    border-radius: ${({theme}) => theme.size.small};


    ::placeholder{
        color: ${({theme}) => theme.gray}
    }
`;

export const Error = styled.span`
        font-size: 0.9rem;
        padding-left: ${({theme}) => theme.size.medium};
        color: ${({theme}) => theme.red};
        font-weight: 500;
`;