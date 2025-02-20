import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

export type CenterTextProps = {
    title: string;
    description: string;
    buttons: {
        text: string;
        link: string;
        variant: "primary" | "secondary" | "tertiary";
    }[];
    image?: ImageProps["srcLocal"];
};

export const CenterText: FC<CenterTextProps> = ({
    title,
    description,
    buttons,
    image,
}) => {
    // Do not render if there are no elements
    if (!title && !description) {
        return null;
    }

    return (
        <div className="mt-32 md:mt-40 md:mb-16">
            <Container>
                <div
                    className="text-center flex justify-center flex-col items-center gap-5"
                    data-animate
                >
                    <h1 className="text-h2-md md:text-h1-md lg:text-h1-lg font-bold opacity-90">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-p-md sm:text-p-leading max-w-lg opacity-50 margin-p last:margin-p-last">
                            {description}
                        </p>
                    )}
                    {buttons && (
                        <div className="max-w-xs mx-auto gap-5 sm:max-w-none flex justify-center flex-col sm:flex-row ">
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    variant={button.variant}
                                    link={button.link}
                                >
                                    {button.text}
                                </Button>
                            ))}
                        </div>
                    )}
                    {image && (
                        <figure className="max-w-xl mt-10">
                            <Image srcLocal={image} alt="hero image"></Image>
                        </figure>
                    )}
                </div>
            </Container>
        </div>
    );
};
