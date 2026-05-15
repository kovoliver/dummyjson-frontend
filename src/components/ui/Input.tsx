import type { InputProps } from "../../core/interfaces";
import { bgActives, bgColors, borderColors, borderFocuses, fontSizes, inputPaddings, textColors } from "../../core/theme";
import { getValueByKey } from "../../core/utils";

export default function Input({ placeholder, borderColor, textColor, 
    bgColor, size, customClasses = null, onChange = null }: InputProps) {
    const colorClass = getValueByKey(textColors, textColor, "textColors");
    const bgClass = getValueByKey(bgColors, bgColor, "bgColors");
    const activeClass = getValueByKey(bgActives, bgColor, "bgActive");
    const fontSizeClass = getValueByKey(fontSizes, size, "fontSizes");
    const paddingClass = getValueByKey(inputPaddings, size, "paddings");
    const borderClass = getValueByKey(borderColors, borderColor, "border");
    const focusClass = getValueByKey(borderFocuses, borderColor, "border");

    let classes = [
        colorClass, bgClass, 
        borderClass, focusClass, 
        activeClass, fontSizeClass, 
        paddingClass
    ].join(" ").trim();

    if(customClasses) classes += " " + customClasses.join(" ");

    return (
        <input 
            className={`rounded border-2 outline-none ${classes}`} 
            placeholder={placeholder} onChange={onChange || undefined}
        />
    );
}