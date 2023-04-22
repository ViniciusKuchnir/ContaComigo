import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    padding: ${({theme}) => theme.size.big};
    gap: ${({theme}) => theme.size.big};

    main{
        flex: 1;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        padding: ${({theme}) => theme.size.big};
        border-radius: ${({theme}) => theme.size.medium};
    }
`;

export const Head = styled.div`
    span{
        color: ${({theme}) => theme.gray};
        letter-spacing: 1px;
    }
`;