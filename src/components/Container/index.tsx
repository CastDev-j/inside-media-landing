import type { FC } from "react";

type ContainerProps = {
    children: React.ReactNode;
};

/**
 *  Custom container based on the Bootstrap container.
 */
export const Container: FC<ContainerProps> = ({ children, ...rest }) => {
    return (
        <div
            className="m-auto px-5 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-1320px"
            {...rest}
        >
            {children}
        </div>
    );
};
