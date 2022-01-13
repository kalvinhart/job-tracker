import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    :root {
        --clr-primary: #f25b86;
        --clr-secondary: #2a2a2a;
        --clr-tertiary: #636e72;
        --clr-tertiary-text: #00a8ff;
        --clr-bg: #f1f1f2;
        --clr-light: #fafafa;
        --clr-outline: #eae9eb;
        --clr-dark: #e1dfe3;
        
        --side-panel-width: 50px;
        --border-radius: 5px;
        --box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Nunito, sans-serif;
        background-color: var(--clr-bg);
    }

    a {
        text-decoration: none;
    }

    .plus-icon {
        color: var(--clr-primary);
        margin-bottom: 10px;
    }
`;

export default GlobalStyle;
