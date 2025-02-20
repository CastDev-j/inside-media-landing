import { Container } from "@components/Container";
import { Icon } from "@static/icons";
import { type FC } from "react";

export type TestimonialsProps = {
    data: {
        aboveTitle?: string;
        title?: string;
        description?: string;
        authors: {
            authorName: string;
            authorRole: string;
            content: string;
        }[];
    };
};

export const Testimonials: FC<TestimonialsProps> = ({
    data: { authors, description, aboveTitle, title },
}) => {
    // Do not render if there are no elements
    if (!authors.length) {
        return null;
    }

    return (
        <section className="mt-20 mb-20 lg:mb-40">
            <Container>
                <div
                    className="mx-auto max-w-2xl text-center mb-16"
                    data-animate
                >
                    {aboveTitle && (
                        <p className="text-p font-semibold leading-7 text-tertiary">
                            {aboveTitle}
                        </p>
                    )}
                    {title && (
                        <h2 className="mt-2 text-h2-md font-bold tracking-tight text-secondary">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-6 text-p leading-8 text-secondary">
                            {description}
                        </p>
                    )}
                </div>
                <div className="grid gap-8 lg:grid-cols-3 items-start">
                    {authors.map((author, index) => (
                        <div
                            className="flex flex-col h-full p-10 bg-secondary rounded-lg relative over"
                            key={index}
                            data-animate
                        >
                            <div className="absolute top-4 left-5 inline-flex flex-col mb-4">
                                <Icon name="testimonial" className="w-8" />
                            </div>
                            <blockquote className="text-lg text-primary opacity-50 grow pt-5">
                                {author.content}
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-secondary border-opacity-40">
                                <cite className="text-gray-200 not-italic">
                                    {author.authorName} -
                                </cite>{" "}
                                <a
                                    className="text-tertiary hover:text-primary transition duration-150 ease-in-out"
                                    href="#"
                                >
                                    {author.authorRole}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
