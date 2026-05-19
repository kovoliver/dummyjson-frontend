import { BoxVariants } from "../../core/theme";
import type { BoxProps } from "../../core/interfaces";

export default function Box({
    children,
    variant,
    size,
    borderWidth,
    rounded = "rounded",
    customClasses = []
}: BoxProps) {
    let classes = BoxVariants({variant, size, borderWidth});

    classes += customClasses ? ` ${rounded} ` + customClasses.join(" ") : "";

    return (
        <div className={classes}>
            {children}
        </div>
    );
}