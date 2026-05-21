import type { TagInputProps } from "../../core/interfaces";
import Box from "./Box";
import Tag from "./Tag";

export default function TagInput({boxVariant = "white", tagVariant = "main", tags, addTag, removeTag, placeholder}:TagInputProps) {
    const createTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;

        const tag = e.currentTarget.value.trim();
        
        e.currentTarget.value = ""; 

        if (tag.length === 0 || tags.includes(tag)) return;
        
        addTag(tag);
    };

    return(
        <Box variant={boxVariant} padding="sm" customClasses={['flex flex-wrap']}>
            <div className="flex flex-wrap">
                {
                    tags.map((t, i)=> 
                        <Tag key={t}
                            removeTag={removeTag}
                            variant={tagVariant}
                            value={t}
                            index={i}
                        />
                    )
                }
            </div>
            <input type="text" placeholder={placeholder} 
            className="bg-white outline-none rounded-sm p-1 max-w-25" onKeyDown={createTag}/>
        </Box>
    );
};