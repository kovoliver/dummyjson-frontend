import { paddings } from "../../core/theme";
import { getValueByKey } from "../../core/utils";
import type { BoxProps } from "../../core/interfaces";

export default function Box({
    children,
    text,
    padding,
    textColor,
    bgColor,
    borderWidth = 1,
    rounded = "rounded-md",
    customClasses = []
}: BoxProps) {
    const paddingClass = getValueByKey(paddings, padding, "paddings");

    const classes = [
        `bg-${bgColor}`,
        `text-${textColor}`,
        `ring-${borderWidth} ring-black/25`,
        borderWidth,
        rounded,
        paddingClass,
        "filter brightness-95",
        ...(customClasses || [])
    ].join(" ");

    return (
        <div className={classes}>
            {text && <p>{text}</p>}
            {children}
        </div>
    );
}