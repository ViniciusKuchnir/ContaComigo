import styled from "styled-components";

export const Main = styled.main`
    padding: ${({theme}) => theme.size.big};
`;

export const Head = styled.div`
    margin-bottom: ${({theme}) => theme.size.big};
    span{
        color: ${({theme}) => theme.gray};
        letter-spacing: 1px;
    }
`;