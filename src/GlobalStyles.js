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
        
        --border-radius: 5px;
        --box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.1);
        
        --side-panel-width: 50px;
        --side-panel-animation-speed: 0.2s;
        --side-panel-animation-delay: 0.4s;
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

    .lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
`;

export default GlobalStyle;
