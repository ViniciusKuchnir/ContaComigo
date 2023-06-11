import styled from "styled-components";

export const Content = styled.div`
    padding: ${({theme}) => theme.size.big};
`;

export const Lists = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({theme}) => theme.size.big};
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    border: 1px solid ${({theme}) => theme.gray};
    margin-bottom: ${({theme}) => theme.size.big};
`;

export const Graphs = styled.div`
    display: flex;
    justify-content: space-between;
 
`;