import { Button } from "@components/Button";
import { Image, type ImageProps } from "@static/images";
import { type FC } from "react";

export type ContentImageProps = {
    logo?: ImageProps["srcLocal"];
    label: string;
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
        variant: "primary" | "secondary" | "tertiary";
    };
    image?: ImageProps["srcLocal"];
};

export const ContentImage: FC<ContentImageProps> = ({
    title,
    description,
    button,
    image,
    label,
    logo,
}) => {
    // Do not render if there are no elements
    if (!title && !description) {
        return null;
    }

    return (
        <section className="relative bg-primary w-full">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1">
                <div className="py-28 px-12 lg:py-32 lg:px-20 xl:py-32 xxl:py-52 xxl:px-40">
                    <div className="mx-auto max-w-2xl lg:mx-0" data-animate>
                        {logo && (
                            <Image
                                srcLocal={logo}
                                alt="logo"
                                className="max-w-60"
                            />
                        )}
                        {label && (
                            <div className="hidden sm:inline-block rounded-full  mt-10 px-5 py-3 text-sm leading-6 text-secondary ring-1 ring-secondary">
                                {label}
                                <a
                                    href="#"
                                    className="whitespace-nowrap font-semibold text-tertiary ml-2"
                                >
                                    Ver más
                                    <span aria-hidden="true" className="ml-1">
                                        &rarr;
                                    </span>
                                </a>
                            </div>
                        )}
                        {title && (
                            <h1 className="mt-10 lg:mt-14 text-h1 font-bold tracking-tight text-secondary lg:mt-10">
                                {title}
                            </h1>
                        )}
                        {description && (
                            <p className="mt-6 text-justify text-p-lg leading-8 text-secondary opacity-60">
                                {description}
                            </p>
                        )}
                        {button && button.link && (
                            <div className="mt-10 flex items-center gap-x-6">
                                <Button
                                    variant={button.variant}
                                    link={button.link}
                                >
                                    {button.text}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                {image && (
                    <figure className="relative w-full h-full min-h-56">
                        <Image
                            srcLocal={image}
                            alt={label}
                            className="relative inset-0 lg:absolute w-full h-full object-cover object-center"
                        />
                    </figure>
                )}
            </div>
        </section>
    );
};
