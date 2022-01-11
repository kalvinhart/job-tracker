import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }

    :root {
        --clr-primary: #f25b86;
        --clr-secondary: #2a2a2a;
        --clr-bg: #f1f1f2;
        --clr-outline: #eae9eb;
        --clr-shadow: #e1dfe3;
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Nunito, sans-serif;
        background-color: var(--clr-bg);
    }
`;

export default GlobalStyle;
