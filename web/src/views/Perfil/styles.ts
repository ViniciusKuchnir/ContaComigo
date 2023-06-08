import styled from "styled-components";
import { Player } from '@lottiefiles/react-lottie-player';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.size.big};
`;

export const Image = styled(Player)`
    height: 380px;
    border: 2px solid ${({theme}) => theme.gray};
    border-radius: ${({theme}) => theme.size.medium};
    padding: ${({theme}) => theme.size.big};
`;

export const Names = styled.div`
    display: flex;
    gap: ${({theme}) => theme.size.medium};
`;

export const Buttons = styled.div`
    display: flex;
    gap: ${({theme}) => theme.size.medium};
`;