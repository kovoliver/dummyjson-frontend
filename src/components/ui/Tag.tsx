import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TagProps } from "../../core/interfaces";
import Box from "./Box";

export default function Tag({variant, value, removeTag, index}:TagProps) {
    return(
        <Box variant={variant} padding="sm" customClasses={["mr-1 flex items-center justify-between"]}>
            {value}

            <FontAwesomeIcon onClick={()=>removeTag(index)} icon="circle-xmark" className="cursor-pointer"/>
        </Box>
    );
}