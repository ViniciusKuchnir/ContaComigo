import { DefaultTheme } from "styled-components";

declare module 'styled-components'{
    export interface DefaultTheme{
        background: string;
        text: string;
        gray: string;
        purple: string;
        yellow: string;
        red: string;
        border:{
            small: string;
            medium: string;
            big: string;
        },
        margin:{
            small: string;
            medium: string;
            big: string;
        }
    }
}

export const lightTheme: DefaultTheme = {
    background: '#ECF1F8',
    text: '#333',
    purple: '#663399',
    gray: '#808080',
    yellow: '#FDED2A',
    red: '#CC0000',
    border: {
        small: '4px',
        medium: '8px',
        big: '12px',
    },
    margin: {
        small: '4px',
        medium: '8px',
        big: '12px',
    }
}

export const darkTheme: DefaultTheme = {
    background: '#333',
    text: '#ECF1F8',
    purple: '#663399',
    gray: '#808080',
    yellow: '#FDED2A',
    red: '#CC0000',
    border: {
        small: '4px',
        medium: '8px',
        big: '12px',
    },
    margin: {
        small: '4px',
        medium: '8px',
        big: '12px',
    }
}