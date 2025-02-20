import { css } from "@emotion/react";

// use this colors only if necessary - use Theme for colors
export const Colors = {
    primary: "#FFFFFF",
    secondary: "#111827",
    tertiary: "#4f46e5",
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.primary};
        --secondary: ${Colors.secondary};
        --tertiary: ${Colors.tertiary};
    }
`;

// use this for colors
export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
};
