import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { User } from "./types";

export interface UserContextType {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: User, accessTokrn: string, refreshToken:string) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
}

export interface NotificationContexType {
    message:string|string[]|Record<string,any>|null;
    messageType:"success"|"warning"|"danger"|"info";
    isVisible:boolean;
    setIsVisible:(isVisible:boolean)=>void;
    setMessage:(msg:string|Record<string,any>|string[])=>void;
    setMessageType:(msgType:"success"|"warning"|"danger"|"info")=>void;
};

export interface ButtonProps {
    text:string;
    variant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    customClasses?:string[]|null;
    icon?:IconProp|null;
    onClick?: ((...args: any[]) => any) | null;
}

export interface InputProps {
    name?:string;
    id?:string;
    type:"text"|"password"|"email"|"date"|"time"|"number";
    value?:string|number;
    placeholder:string;
    variant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    customClasses?:string[]|null;
    onChange?: ((...args: any[]) => any) | null;
}

export interface TagInputProps extends Omit<InputProps, "type"|"value"> {
    tags:string[];
    setTags?: ((...args: any[]) => any) | null;
};

export interface BoxProps {
    children?: React.ReactNode;
    variant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning"|"success"|"info"|"white";
    padding?: "none" | "sm" | "md" | "lg" | "xl" | "xxl";
    borderWidth?:"border-thin"|"border-medium"|"border-thick";
    rounded?: "rounded-none" | "rounded" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
    customClasses?: string[] | null;
}

export interface TagInputProps {
    boxVariant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning"|"success"|"info"|"white";
    tagVariant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning";
    placeholder:string;
    tags:string[];
    addTag:(tag:string)=>any;
    removeTag:(index:number)=>any;
}

export interface TagProps {
    variant:"primary"|"secondary"|"danger"|"main"|"accent"|"warning";
    index:number;
    value:string;
    removeTag:(index:number)=>any;
}

export interface AlertProps extends BoxProps {
    onClose?: () => void;
    isVisible:boolean;
    setIsVisible:(isVisible:boolean)=>void;
}

export type SimpleButtonProps = Pick<ButtonProps, "text" | "size" | "customClasses" | "icon" | "onClick">;