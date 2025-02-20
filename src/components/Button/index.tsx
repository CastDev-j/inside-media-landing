import * as S from "./styled";
import type { FC } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> & {
    children: any;
    link?: string;
    variant?: "primary" | "secondary" | "tertiary";
    target?: "_blank" | "_self" | "_parent";
    align?: "left" | "center" | "right";
    asButton?: boolean;
    type?: "button" | "submit" | "reset";
};

/**
 * Button component
 * @param {string} link - link to the page
 * @example
 * <Button link="#">text</Button>
 */
export const Button: FC<ButtonProps> = ({
    link,
    target,
    children,
    align = "center",
    variant = "primary",
    asButton,
    type,
    ...rest
}) => {
    // render button as normal button, otherwise as link
    const ButtonComponent = asButton ? S.Button : S.ButtonLink;

    const primaryClass =
        "inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary bg-tertiary hover:bg-opacity-50 bg-tertiary font-medium";

    const secondaryClass =
        "inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-secondary bg-primary hover:bg-opacity-70 font-medium";

    const tertiaryClass =
        "inline-flex items-center justify-center border border-transparent rounded-sm leading-snug transition duration-150 ease-in-out text-primary bg-tertiary bg-opacity-20 hover:bg-secondary font-medium";

    let classes;

    switch (variant) {
        case "primary":
            classes = primaryClass;
            break;
        case "secondary":
            classes = secondaryClass;
            break;
        case "tertiary":
            classes = tertiaryClass;
            break;
        default:
            classes = primaryClass;
            break;
    }

    let alignClasses;

    switch (align) {
        case "left":
            alignClasses = "justify-start";
            break;
        case "center":
            alignClasses = "justify-center";
            break;
        case "right":
            alignClasses = "justify-end";
            break;
        default:
            alignClasses = "justify-center";
            break;
    }

    /**
     * button can be rendered as a link or as a button
     */
    return (
        <S.ButtonWrapper $align={align}>
            <ButtonComponent
                href={link}
                target={target}
                $variant={variant}
                className={
                    "w-full p-2 px-4" + " " + classes + " " + alignClasses
                }
                {...rest}
            >
                {children}
            </ButtonComponent>
        </S.ButtonWrapper>
    );
};
