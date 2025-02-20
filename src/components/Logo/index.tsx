import { Icon } from "@static/icons";
import { Image } from "@static/images";
import type { FC } from "react";

/**
 * Logo is a text but if there is need to use img, add two img from <Image component
 * @import
 * @example
 * import { Image } from "@static/images";
 * <Image src="logo-light" alt="logo" data-theme-el="light" />
 * when is light
 * <Image src="logo-dark" alt="logo" data-theme-el="dark" />
 */
export const Logo: FC = () => {
    return (
        <div className="shrink-0 mr-4">
            {/* Logo */}
            <a href="/" className="block" aria-label="logo">
                <Image
                    srcLocal="logo"
                    alt="logo"
                    className="max-w-20 lg:max-w-28"
                />
            </a>
        </div>
    );
};
