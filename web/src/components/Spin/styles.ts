import styled, {keyframes} from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const rotate = keyframes`
    to{
        transform: rotate(360deg);
    }
    from{
        transform: rotate(0deg);
    }

`;

export const Spin = styled.div`
    width: 120px;
    height: 120px;
    border: ${({theme}) => theme.size.medium} solid transparent;
    border-radius: 50%;
    border-top: ${({theme}) => theme.size.medium} solid ${({theme}) => theme.purple};
    -webkit-animation: ${rotate} 1s linear infinite;
    animation: ${rotate} 1s linear infinite;
`;

export const Text = styled.span`
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-weight: 600;
`;