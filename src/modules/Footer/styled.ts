import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const FooterCols = styled.div`
    display: grid;
    grid-template-columns: calc(60% - 80px) 20% 20%;
    gap: 40px;
    margin: 30px 0;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
    }
`;
