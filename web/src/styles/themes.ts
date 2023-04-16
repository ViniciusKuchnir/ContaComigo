import { DefaultTheme } from "styled-components";

declare module 'styled-components'{
    export interface DefaultTheme{
        background: string;
        text: string;
        gray: string;
        purple: string;
        purpleDark: string;
        yellow: string;
        red: string;
        white: string;
        size:{
            small: string;
            medium: string;
            big: string;
        },
        
    }
}

export const lightTheme: DefaultTheme = {
    background: '#F5F5F5',
    text: '#333',
    purple: '#870DB1',
    purpleDark: '#4E0A66',
    gray: '#C2BEA9',
    yellow: '#F8E007',
    red: '#EA2323',
    white: '#FFFFFF',
    size: {
        small: '4px',
        medium: '8px',
        big: '12px',
    },
    
}

export const darkTheme: DefaultTheme = {
    background: '#333',
    text: '#F5F5F5',
    purple: '#870DB1',
    purpleDark: '#4E0A66',
    gray: '#C2BEA9',
    yellow: '#F8E007',
    red: '#EA2323',
    white: '#FFFFFF',
    size: {
        small: '4px',
        medium: '8px',
        big: '12px',
    },
}