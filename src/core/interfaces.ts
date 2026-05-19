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
    message:string|string[]|null;
    messageType:"success"|"warning"|"danger"|"info";
    isVisible:boolean;
    setIsVisible:(isVisible:boolean)=>void;
    setMessage:(msg:string)=>void;
    setMessageType:(msgType:"success"|"warning"|"danger"|"info")=>void;
};

export interface ButtonProps {
    text:string;
    variant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    customClasses?:string[]|null;
    icon?:IconProp|null;
    onClick?:Function|Promise<any>;
}

export interface InputProps {
    type:"text"|"password"|"email"|"date"|"time";
    value?:string;
    placeholder:string;
    variant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    customClasses?:string[]|null;
    onChange?:((value:any)=>void)|null;
}

export interface BoxProps {
    children?: React.ReactNode;
    variant?:"primary"|"secondary"|"danger"|"main"|"accent"|"warning"|"success"|"info";
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    borderWidth?:"border-thin"|"border-medium"|"border-thick";
    rounded?: "rounded-none" | "rounded" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
    customClasses?: string[] | null;
}

export interface AlertProps extends BoxProps {
    onClose?: () => void;
    isVisible:boolean;
    setIsVisible:(isVisible:boolean)=>void;
}

export interface SimpleBoxProps extends Omit<BoxProps, 'bgColor' | 'textColor'> {};

export type SimpleButtonProps = Pick<ButtonProps, "text" | "size" | "customClasses" | "icon" | "onClick">;

export type SimpleInputProps = Omit<InputProps, "bgColor" | "textColor" | "borderColor">;