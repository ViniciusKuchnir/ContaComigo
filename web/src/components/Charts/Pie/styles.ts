import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 300px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: ${({theme}) => theme.size.medium};
`;

export const EmptyChart = styled.h1`
    width: 100%;
    text-align: center;
`;