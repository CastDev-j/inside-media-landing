import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const StatCard = styled.div<{
    $variant: "white" | "blue" | "black";
}>`
    ${MediaQuery.min("lg")} {
        min-height: 300px;
    }

    ${(props) =>
        props.$variant === "black" &&
        css`
            ${MediaQuery.min("lg")} {
                min-height: 450px;
            }

            b {
                color: ${Theme.primary};
            }
        `}
`;
