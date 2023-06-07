import styled from "styled-components";

export const Text = styled.p`
    margin-bottom: ${({theme}) => theme.size.big};
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    gap: ${({theme}) => theme.size.medium};
`;