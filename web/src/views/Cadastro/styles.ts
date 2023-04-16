import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    padding: ${({theme}) => theme.size.medium};
    display: flex;
    align-items: center;
`;

export const BoxMessage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${({theme}) => theme.purple};
    border-radius: ${({theme}) => theme.size.big};
    padding: ${({theme}) => theme.size.big};

    @media (max-width: 425px) {
        display: none;
    }
`;

export const Brand = styled.span`
    color: ${({theme}) => theme.white};
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 600;
`;

export const MessageMain = styled.h1`
    color: ${({theme}) => theme.white};
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: ${({theme}) => theme.size.big};
`;

export const Message = styled.p`
    color: ${({theme}) => theme.white};
    font-weight: 100;
`;

export const Card = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: ${({theme}) => theme.size.big};
    background-color: ${({theme}) => theme.purpleDark};
    border-radius: ${({theme}) => theme.size.big};

    i{
        color: ${({theme}) => theme.white};
        font-size: 1.2rem;
        text-align: justify;
    }
`;

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.size.medium};

    img{
        width: 52px;
        height: 52px;
        border-radius: 50%;
    }
`;

export const DataAvatar = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.white};
    letter-spacing: 1px;
    
    strong{
        font-size: 0.9rem
    }

    span{
        font-size: 0.8rem
    }
`;

export const Form = styled.form`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: ${({theme}) => theme.size.big };

    
    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const MessageSignUp = styled.div`
    p{
        font-size: 1.2rem;
        color: ${({theme}) => theme.gray};
        font-weight: 100;
    }
`;

export const SocialButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: ${({theme}) => theme.size.big};
`;

export const Line = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.size.big};
    color: ${({theme}) => theme.gray};

    div{
        width: 100%;
        height: 1px;
        border: 1px solid ${({theme}) => theme.gray};
    }
`;

export const InputsName = styled.div`
    display: flex;
    gap: ${({theme}) => theme.size.big};
`;
