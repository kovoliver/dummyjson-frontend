import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { paddings, bgColors, textColors, borderColors } from "./theme";
import type { User } from "./types";

export interface ButtonProps {
    text:string;
    size:keyof typeof paddings;
    textColor:keyof typeof textColors;
    bgColor:keyof typeof bgColors;
    customClasses?:string[]|null;
    icon?:IconProp|null;
    onClick?:(()=>void)|null;
}

export interface UserContextType {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
}

export interface InputProps {
    type:"text"|"password"|"email"|"date"|"time";
    placeholder:string;
    size:keyof typeof paddings;
    textColor:keyof typeof textColors;
    bgColor:keyof typeof bgColors;
    borderColor: keyof typeof borderColors;
    customClasses?:string[]|null;
    onChange?:((value:any)=>void)|null;
}

export interface BoxProps {
    children?: React.ReactNode;
    text?: string;
    padding: keyof typeof paddings;
    textColor: keyof typeof textColors;
    bgColor: keyof typeof bgColors;
    borderWidth?:1|2|3|4|5;
    rounded?: "rounded-none" | "rounded" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
    customClasses?: string[] | null;
}

export interface AlertProps extends BoxProps {
    onClose?: () => void;
}

export interface SimpleBoxProps extends Omit<BoxProps, 'bgColor' | 'textColor'> {};

export type SimpleButtonProps = Pick<ButtonProps, "text" | "size" | "customClasses" | "icon" | "onClick">;

export type SimpleInputProps = Omit<InputProps, "bgColor" | "textColor" | "borderColor">;