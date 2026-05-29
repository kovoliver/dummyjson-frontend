import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // <-- Ezt hozd be!
import type { ButtonProps } from "../../core/interfaces";
import { ButtonVariants } from "../../core/theme";
import { useUserStore } from "../../core/stores/userStore";

export default function Button({ 
    text, 
    variant, 
    size, 
    customClasses = null, 
    icon = null, 
    onClick = null, 
    isSubmit = false 
}: ButtonProps) {
    const submitting = useUserStore(state => isSubmit ? state.submitting : false);

    let classes = !submitting ? ButtonVariants({ variant, size })
    : ButtonVariants({ variant:"disabled", size });
    
    classes += customClasses ? " " + customClasses.join(" ") : "";

    return (
        <button 
            className={`rounded transition-all duration-200 ${classes}`} 
            onClick={onClick || undefined}
            disabled={isSubmit && submitting}
        >
            <span className={icon || (isSubmit && submitting) ? "mr-2" : ""}>
                {text}
            </span>

            {isSubmit && submitting ? (
                <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
                icon && <FontAwesomeIcon icon={icon} />
            )}
        </button>
    );
}