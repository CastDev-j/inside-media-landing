import { type FC } from "react";

import {
    CenterText,
    type CenterTextProps,
} from "./variants/CenterText/CenterText";
import { ContentImage, type ContentImageProps } from "./variants/ContentImage";

/**
 * to avoid passing wrong props to the component
 * we can use union type to define the props
 * and use it as a prop in the component
 * this way we can avoid passing wrong props
 * and also we can have a better understanding of the component
 * if there will be more types
 *
 * @example
 * type HeroProps = |{
 *  heroType: "center";
 *  } | {...another}
 *
 * | is important here, it is used to define the type
 */
type HeroProps =
    | {
          heroType: "center";
          data: CenterTextProps;
      }
    | {
          heroType: "contentImage";
          data: ContentImageProps;
      };

export const Hero: FC<HeroProps> = ({ heroType, data, ...rest }) => {
    /*
     * content can be passed as children or as content prop
     * if content is passed as children, it will be used as content
     * if content is passed as content prop, it will be used as content via custom html
     */
    if (!data) {
        return null;
    }

    let HeroTypeOutput;
    switch (heroType) {
        case "center":
            HeroTypeOutput = (
                <CenterText {...(data as CenterTextProps)} {...rest} />
            );
        case "contentImage":
            HeroTypeOutput = (
                <ContentImage {...(data as ContentImageProps)} {...rest} />
            );
            break;
    }

    const isFullWidth = heroType === "contentImage" ? "w-full" : "";

    return (
        <div
            className={` ${isFullWidth + " "} flex items-center justify-center`}
        >
            {HeroTypeOutput}
        </div>
    );
};
