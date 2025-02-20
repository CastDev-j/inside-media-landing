import { Container } from "@components/Container";
import { Logo } from "@components/Logo";
import { Navigation } from "@modules/Navigation";
import { type FC, useEffect, useRef } from "react";
import * as S from "./styled";

export const Header: FC = () => {
    const headerRef = useRef<HTMLHeadElement>(null);
    /**
     * on scroll add blur & background to the header
     */
    useEffect(() => {
        const header = document.querySelector("header");

        const handleScroll = () => {
            if (window.scrollY > 10) {
                header?.classList.add(`bg-primary`, "backdrop-blur");
            } else {
                header?.classList.remove(`bg-primary`, "backdrop-blur");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <S.HeaderStyled
            className="fixed w-full top-0 left-0 z-30 bg-opacity-50 transition duration-150 ease-in-out "
            ref={headerRef}
        >
            <Container>
                <div className="flex items-center justify-between h-20">
                    <Logo />

                    <Navigation />
                </div>
            </Container>
        </S.HeaderStyled>
    );
};
