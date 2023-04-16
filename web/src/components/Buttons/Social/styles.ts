import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: ${({theme}) => theme.background};
        padding: 4px;
        cursor: pointer;

        img{
            width: 80%;
            height: 80%;
        }
    }

    span{
        color: ${({theme}) => theme.text};
        letter-spacing: 1px;
    }
`;
