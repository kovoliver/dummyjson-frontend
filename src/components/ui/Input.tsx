import type { InputProps } from "../../core/interfaces";
import { InputVariants } from "../../core/theme";

export default function Input({type, placeholder, variant, size, customClasses, value = "", onChange = null}: InputProps) {
    let classes = InputVariants({variant, size});

    classes += customClasses ? " " + customClasses.join(" ") : "";
    
    return(
        <input 
            type={type} className={classes}
            placeholder={placeholder} 
            onChange={onChange||undefined}
            value={value && typeof value === "string" ? value : ""}
        />
    );
}