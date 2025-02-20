import { css } from "@emotion/react";
import { Theme, ThemeVar } from "@styles/colors";
import { FontFace, Fonts } from "@styles/fonts";
import { MediaQuery } from "@styles/mediaQuery";

export const NormalizeCSS = css`
    ${FontFace};
    ${ThemeVar};

    :root {
        color-scheme: light only;
    }

    body,
    html {
        font-family: ${Fonts.primary};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.2;
    }

    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;

        color: ${Theme.secondary};
    }

    main {
        display: block;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    img {
        border-style: none;
        object-fit: cover;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button {
        padding: 0;
    }

    figure {
        margin: 0;
        line-height: 0;
    }

    strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        font-size: 60px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 45px;
        }
    }

    h2 {
        font-size: 60px;
        line-height: 1.2;
        ${MediaQuery.max("lg")} {
            font-size: 40px;
        }
    }

    h3 {
        font-size: 35px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 25px;
        }
    }

    h4 {
        font-size: 25px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 18px;
        }
    }

    h5 {
        font-size: 20px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 18px;
        }
    }

    h6 {
        font-size: 18px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
        }
    }

    p {
        font-size: 18px;
        line-height: 24px;

        ${MediaQuery.max("lg")} {
            font-size: 16px;
            line-height: 20px;
        }
    }

    [data-animate] {
        transform: translateY(50px);
        opacity: 0.001;
        transition: opacity 0.5s, transform 0.5s;

        &.animate-fade-in {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
