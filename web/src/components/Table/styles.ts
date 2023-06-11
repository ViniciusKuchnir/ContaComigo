import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableTitle = styled.td`
    padding: ${({theme}) => theme.size.big};
  text-align: center;
  background-color: ${({theme}) => theme.purple};
  color: ${({theme}) => theme.white};
  font-weight: bold;
`;

export const TableHeader = styled.th`
  padding: ${({theme}) => theme.size.big};
  text-align: center;
  background-color: ${({theme}) => theme.purple};
  color: ${({theme}) => theme.white};
  font-weight: bold;
`;

export const TableData = styled.td`
  padding: ${({theme}) => theme.size.small};
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export const MessageEmptyList = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.gray};
`;