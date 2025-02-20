import { type FC } from "react";
import { Container } from "@components/Container";
import * as S from "./styled";

type StatsProps = {
    data: {
        title: string;
        description: string;
        stats: {
            variant: "white" | "blue" | "black";
            title: string;
            description: string;
        }[];
    };
};

export const Stats: FC<StatsProps> = ({
    data: { description, stats, title },
}) => {
    // Do not render if there are no elements
    if (!stats.length) {
        return null;
    }

    return (
        <section className="my-24 sm:my-48">
            <Container>
                {title && description && (
                    <div
                        className="mx-auto max-w-2xl lg:mx-0 mb-20"
                        data-animate
                    >
                        {title && (
                            <h2 className="text-h2-md font-bold tracking-tight text-secondary">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="mt-6 text-p leading-7 text-secondary opacity-80">
                                {description}
                            </p>
                        )}
                    </div>
                )}
                <div
                    className="grid lg:grid-cols-3 gap-10 lg:gap-20 items-end"
                    data-animate
                >
                    {stats.map((stat, index) => (
                        <S.StatCard
                            $variant={stat.variant}
                            key={index}
                            className={`flex flex-col justify-between gap-y-8 rounded-2xl p-8 shadow-xl ${
                                stat.variant === "white"
                                    ? "bg-primary  text-secondary"
                                    : stat.variant === "blue"
                                    ? "bg-tertiary text-primary"
                                    : "bg-secondary text-gray-300"
                            }`}
                        >
                            <p className="flex-none text-h3 font-bold tracking-tight">
                                <b>{stat.title}</b>
                            </p>

                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p
                                    className="description text-p"
                                    dangerouslySetInnerHTML={{
                                        __html: stat.description,
                                    }}
                                />
                            </div>
                        </S.StatCard>
                    ))}
                </div>
            </Container>
        </section>
    );
};
