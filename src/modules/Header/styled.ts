import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const animateFadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const HeaderStyled = styled.header`
    animation: ${animateFadeIn} 1s ease-in-out;
    z-index: 30;
`;
