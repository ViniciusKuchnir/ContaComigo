import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    0%{
        transform: translateX(16px);
        opacity: 0;
    }
    25%{
        transform: translateX(10px);
        opacity: 0.25;
    }
    50%{
        transform: translateX(5px);
        opacity: 0.5;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.button`
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    right: 2%;
    bottom: 4%;
    border-radius: 50%;
    gap: ${({theme}) => theme.size.small};
    border: none;
    background-color: ${({theme}) => theme.purple};
    color: ${({theme}) => theme.white};
    padding: 1rem;
    cursor: pointer;
    
    span{
        display: none;
        font-size: 1rem;
    }
    
    &:hover span{
        display: block;
        animation: ${fadeIn} 0.2s ease-in-out;
    }

    &:hover{
        width: max-content;
        border-radius: 28px;
    }
    
`;