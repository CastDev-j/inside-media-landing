import { type FC } from "react";
import { Icon, type IconName } from "@static/icons";
import { Container } from "@components/Container";

type ServiceProps = {
    data: {
        aboveTitle?: string;
        title?: string;
        description?: string;
        services: {
            icon: IconName["name"];
            title: string;
            description: string;
        }[];
    };
};

export const Service: FC<ServiceProps> = ({
    data: { aboveTitle, title, description, services },
}) => {
    // Do not render if there are no elements
    if (!services.length) {
        return null;
    }

    return (
        <section className="my-24 sm:my-48">
            <Container>
                <div className="flex flex-col justify-center items-center">
                    <div
                        className="mx-auto max-w-2xl text-center mb-16"
                        data-animate
                    >
                        <p className="text-p font-semibold leading-7 text-tertiary">
                            {aboveTitle}
                        </p>
                        <h2 className="mt-2 text-h2-md font-bold tracking-tight text-secondary">
                            {title}
                        </h2>
                        <p className="mt-6 text-p leading-8 text-secondary">
                            {description}
                        </p>
                    </div>
                    <div className=" mt-16sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative pl-16 lg:pb-0 lg:border-none border-b border-tertiary pb-5"
                                    data-animate
                                >
                                    <div className="text-base font-semibold leading-7 text-secondary">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary">
                                            <Icon
                                                name={service.icon}
                                                className="h-6 w-6 text-primary"
                                            />
                                        </div>
                                        <h3 className="text-p">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="mt-2 text-p-md text-secondary">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
