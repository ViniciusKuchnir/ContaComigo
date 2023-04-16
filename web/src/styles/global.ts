import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Poppins', sans-serif;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background: ${({theme}) => theme.background};
        color: ${({theme}) => theme.text};
        -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none;
    }

`;