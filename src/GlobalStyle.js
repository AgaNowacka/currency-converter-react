import { createGlobalStyle } from "styled-components";
import background from "./money.jpg";


export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
    }
`;