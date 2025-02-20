import { Container } from "@components/Container";
import { type FC } from "react";

type ContentSectionProps = React.HTMLAttributes<HTMLElement> & {
    children?: any;
};

export const ContentSection: FC<ContentSectionProps> = ({
    children,
    ...rest
}) => {
    // do not render if there are no elements
    if (!children) {
        return null;
    }
    return (
        <section className="mt-32 md:mt-40 md:mb-16" {...rest} data-animate>
            <Container>
                <div className="text-center max-w-xl m-auto flex flex-col gap-5 justify-center items-center">
                    {children}
                </div>
            </Container>
        </section>
    );
};
