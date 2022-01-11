import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Nunito, sans-serif;
    }
`;

export default GlobalStyle;
