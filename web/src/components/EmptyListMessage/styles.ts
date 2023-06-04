import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.h1`
    color: ${({theme}) => theme.gray};
`;

export const NameList = styled.span`
    text-transform: lowercase;
`;