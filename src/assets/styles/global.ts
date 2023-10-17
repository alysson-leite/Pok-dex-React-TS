import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Roboto Mono', monospace;

        /*=== SCROLL ===*/
        /* Works on Firefox */
        * {
            scrollbar-width: thin;
            scrollbar-color: #B71C1C #070d12;
        }
        
        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 10px;
        }
        
        *::-webkit-scrollbar-track {
            background: #070d12;
        }
        
        *::-webkit-scrollbar-thumb {
            background-color: #B71C1C;
            border-radius: 20px;
            border: 3px solid #070d12;
        }
    }

    body {
        background-color: #EEEEEE;
    }

    button {
        border: none;
        cursor: pointer;
        background: transparent;
    }

`;
