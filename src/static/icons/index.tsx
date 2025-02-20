import type { FC, ReactElement } from "react";

/**
 * NOTE
 * add ?react to use SVG as React Component!!
 * @important
 */

import IconThemeDark from "./icon-theme-dark.svg?react";
import IconThemeLight from "./icon-theme-light.svg?react";
import IconCloud from "./icon-cloud.svg?react";
import IconFingerPrint from "./icon-fingerprint.svg?react";
import IconRepeat from "./icon-repeat.svg?react";
import Iconlock from "./icon-lock.svg?react";
import IconGradient from "./icon-gradient.svg?react";
import IconTestimonial from "./icon-testimonial.svg?react";

// add all icons here to have easier access to all icons
export const icons = {
    themeDark: IconThemeDark,
    themeLight: IconThemeLight,
    cloud: IconCloud,
    fingerprint: IconFingerPrint,
    repeat: IconRepeat,
    lock: Iconlock,
    testimonial: IconTestimonial,
    gradient: IconGradient,
};

export type IconName = React.ImgHTMLAttributes<HTMLElement> & {
    name: keyof typeof icons;
};

/**
 * Icon is a component that renders an SVG with the specified icon name
 * @example
 * <Icon name="home" />
 */
export const Icon: FC<IconName> = ({ name, ...rest }): ReactElement => {
    const IconComponent = icons[name];

    return <IconComponent {...(rest as any)} />;
};
