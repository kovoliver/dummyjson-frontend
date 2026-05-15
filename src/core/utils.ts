export function getValueByKey(object: Record<string, any>, key: string, context: string): string {
    if (!(key in object)) {
        const errorMsg = `[UI Error] The "${key}" key is missing: ${context}.`;
        
        if (import.meta.env.DEV) {
            throw new Error(errorMsg);
        } else {
            console.error(errorMsg);
            return ""; 
        }
    }
    return object[key];
}

export const createColorObject = (colors:Record<string,string>, prop:string):Record<string,string>=> {
    const result:Record<string, string> = {};

    for(const [key, value] of Object.entries(colors)) {
        result[key] = `${prop}-${value}`;
    }

    return result;
};