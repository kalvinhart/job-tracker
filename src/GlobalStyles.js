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
        --clr-primary: #018989;
        --clr-primary-dark: #016262;
        --clr-primary-rgba: rgba(1, 137, 137, 0.3);
        --clr-secondary: #2a2a2a;
        --clr-danger: #cc0000;
        --clr-bg: #fafafa;
        --clr-outline: #e1dfe3;
        --clr-dark: #e1dfe3;

        --clr-grey-light: #fcfcfc;
        --clr-grey-dark: #404040;
        --clr-error: #cc0000;

        --clr-h1: #18A1E0;
        --clr-h3: #01CEE0;

        --clr-row-hover: #f7fdff;
        
        --border-radius: 5px;
        --box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
        
        --side-panel-width: 80px;
        --side-panel-animation-speed: 0.2s;
        --side-panel-animation-delay: 0.4s;
    }

    html {
        box-sizing: border-box;
    }

    body {
        font-family: Roboto, sans-serif;
        background-color: var(--clr-bg);
    }

    a {
        text-decoration: none;
    }

    a svg {
        margin-right: 5px;
        color: var(--clr-primary);
    }
    
    a:hover,
    a:focus {
        text-decoration: underline;
    }

    a:visited {
        color: black;
    }

    .plus-icon,
    .cross-icon {
        color: var(--clr-primary);
    }

    .plus-icon {
        margin-bottom: 10px;
    }

    .cross-icon {
        margin-left: 10px;
    }
`;

export default GlobalStyle;
