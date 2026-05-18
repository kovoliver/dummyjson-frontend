import type { InputProps } from "../../core/interfaces";
import { bgColors, borderColors, borderFocuses, fontSizes, inputPaddings, textColors } from "../../core/theme";
import { getValueByKey } from "../../core/utils";

export default function Input({ type, placeholder, borderColor, textColor,
    bgColor, size, customClasses = null, onChange = null }: InputProps) {
    const colorClass = getValueByKey(textColors, textColor, "textColors");
    const bgClass = getValueByKey(bgColors, bgColor, "bgColors");
    const fontSizeClass = getValueByKey(fontSizes, size, "fontSizes");
    const paddingClass = getValueByKey(inputPaddings, size, "inputPaddings");
    const borderClass = getValueByKey(borderColors, borderColor, "border");
    const focusClass = getValueByKey(borderFocuses, borderColor, "border");

    let classes = [
        colorClass, fontSizeClass, 
        paddingClass,
        borderClass, focusClass
    ].join(" ").trim();

    if (customClasses) classes += " " + customClasses.join(" ");

    return (
        <input
            type={type}
            className={`border-2 ${classes}`}
            placeholder={placeholder}
            onChange={onChange || undefined}
        />
    );
}