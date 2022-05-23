import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --purple-50: #F3E5F5;
        --purple-100: #E1BEE7;
        --purple-200: #CE93D8;
        --purple-500: #9C27B0;
        --purple-800: #6A1B9A;
        --purple-a100: #EA80FC;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Source Sans Pro", sans-serif;
        background-color: var(--purple-50);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, li {
        list-style: none;
    }

    img {
        width: 100%;
    }
`;

export default GlobalStyles;
