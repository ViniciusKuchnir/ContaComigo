import styled from "styled-components";

export const List = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.size.big};

`;