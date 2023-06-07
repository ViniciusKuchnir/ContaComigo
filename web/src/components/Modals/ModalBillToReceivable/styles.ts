import styled from "styled-components";

export const Buttons = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: ${({theme}) => theme.size.big};
`;