import styled, {keyframes} from "styled-components";

type Props = {
    color: 'green' | 'red';
}

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
    from{
        transform: rotate(0deg);
    }

`;

export const Container = styled.div<Props>`
    width: 300px;
    height: 100px;
    padding: ${({theme}) => theme.size.big};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: ${({theme}) => theme.size.medium};
    background-color: ${p => p.color === 'green' ? p.theme.green : p.theme.red};
    color: ${({theme}) => theme.white};
`;

export const Line = styled.div`
    height: 100%;
    border-right: 1px solid ${({theme}) => theme.white};
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Value = styled.span`
    font-size: 32px;
`;

export const Spin = styled.div`
    width: 48px;
    height: 48px;
    border: ${({theme}) => theme.size.medium} solid transparent;
    border-radius: 50%;
    border-top: ${({theme}) => theme.size.medium} solid ${({theme}) => theme.purple};
    -webkit-animation: ${rotate} 1s linear infinite;
    animation: ${rotate} 1s linear infinite;
`;