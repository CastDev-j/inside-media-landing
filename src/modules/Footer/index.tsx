import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
    return (
        <footer className="py-12 md:py-16 shadow-2xl" data-animate>
            <Container>
                <S.FooterCols>
                    <div className="max-w-md">
                        <div className="mb-5">
                            <Logo />
                        </div>
                        <p className="text-secondary ">
                            Este proyecto ha sido creado con el fin de
                            proporcionar precios accesibles a las personas que
                            desean tener una página web para su negocio o
                            proyecto personal.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-secondary font-medium mb-4">
                            Politicas
                        </h6>
                        <ul>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Politica de privacidad
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Terminos y condiciones
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Política de Privacidad
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-secondary font-medium mb-4">
                            Algunos de nuestros productos
                        </h6>
                        <ul>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Ejemplo 1
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Ejemplo 2
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Ejemplo 3
                                </a>
                            </li>
                        </ul>
                    </div>
                </S.FooterCols>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="text-secondary  text-sm mr-4">
                        &copy; 2025 Todos los derechos reservados
                    </div>
                </div>
            </Container>
        </footer>
    );
};
