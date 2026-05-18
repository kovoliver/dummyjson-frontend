import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ButtonProps } from "../../core/interfaces";
import { ButtonVariants } from "../../core/theme";

export default function Button({ text, variant, size, customClasses = null, icon = null, onClick = null }: ButtonProps) {
    let classes = ButtonVariants({variant, size});
    
    classes += customClasses ? customClasses.join(" ") : "";

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