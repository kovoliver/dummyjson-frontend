import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ButtonProps } from "../../core/interfaces";
import { bgActives, bgColors, fontSizes, inputPaddings, textColors } from "../../core/theme";
import { getValueByKey } from "../../core/utils";

export default function Button({ text, textColor, bgColor, size, customClasses = null, icon = null, onClick = null }: ButtonProps) {
    const colorClass = getValueByKey(textColors, textColor, "textColors");
    const bgClass = getValueByKey(bgColors, bgColor, "bgColors");
    const activeClass = getValueByKey(bgActives, bgColor, "bgActive");
    const fontSizeClass = getValueByKey(fontSizes, size, "fontSizes");
    const paddingClass = getValueByKey(inputPaddings, size, "paddings");

    let classes = [colorClass, bgClass, activeClass, fontSizeClass, paddingClass].join(" ").trim();
    if(customClasses) classes += " " + customClasses.join(" ");

    return (
        <button 
            className={`rounded ${classes}`} 
            onClick={onClick ?? undefined}
        >
            <span className={icon ? "mr-0.75" : ""}>{text}</span>
            {
                icon &&
                <FontAwesomeIcon icon={icon}/>
            }
        </button>
    );
}