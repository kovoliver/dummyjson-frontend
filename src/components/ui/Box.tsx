import { bgColors, paddings, textColors } from "../../core/theme";
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

    const bgClass = getValueByKey(bgColors, bgColor, "bgColors");
    const textClass = getValueByKey(textColors, textColor, "textColors");
    const paddingClass = getValueByKey(paddings, padding, "paddings");

    const classes = [
        bgClass,
        textClass,
        `ring-${borderWidth} ring-inset ring-black/20`,
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