import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { User } from "./types";
import type { ThemeColorType } from "./theme";

export interface UserContextType {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: User, accessTokrn: string, refreshToken:string) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
}

export interface ConfirmationOptions {
    title?: string;
    message: string | string[] | Record<string, any>;
    messageType: ThemeColorType;
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: ThemeColorType;
    cancelVariant?: ThemeColorType;
    confirmIcon: IconProp|undefined;
    cancelIcon: IconProp|undefined;
    onConfirm: () => void | null;
    onCancel?: () => void | null;
}

export interface ConfirmationContextType {
    title: string | undefined;
    message: string | string[] | Record<string, any> | null;
    messageType: ThemeColorType;
    isVisible: boolean;
    confirmText: string;
    cancelText: string;
    confirmVariant: ThemeColorType;
    cancelVariant: ThemeColorType;
    confirmIcon: IconProp|undefined;
    cancelIcon: IconProp|undefined;
    askConfirmation: (options: ConfirmationOptions) => void;
    handleConfirm: () => void;
    handleCancel: () => void;
}

export interface ButtonProps {
    text:string;
    variant?:ThemeColorType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    customClasses?:string[]|null;
    icon?:IconProp|null;
    onClick?: ((...args: any[]) => any) | null;
}

export interface InputProps {
    name?:string;
    id?:string;
    type:"text"|"password"|"email"|"date"|"time"|"number"|"textarea";
    value?:string|number;
    placeholder:string;
    variant?:ThemeColorType|undefined|null;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    customClasses?:string[]|null;
    onChange?: ((...args: any[]) => any) | null;
}

export interface SelectProps extends Omit<InputProps, "type"|"placeholder"> {
    options:string[]|number[]|{id:number|string, value:string}[];
}

export interface TagInputProps extends Omit<InputProps, "type"|"value"> {
    tags:string[];
    setTags?: ((...args: any[]) => any) | null;
};

export interface BoxProps {
    children?: React.ReactNode;
    variant?:ThemeColorType;
    padding?: "none" | "sm" | "md" | "lg" | "xl" | "xxl";
    borderWidth?:"border-thin"|"border-medium"|"border-thick";
    rounded?: "rounded-none" | "rounded" | "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-full";
    customClasses?: string[] | null;
}

export interface TagInputProps {
    boxVariant?:ThemeColorType;
    tagVariant?:ThemeColorType;
    placeholder:string;
    tags:string[];
    addTag:(tag:string)=>any;
    removeTag:(index:number)=>any;
}

export interface TagProps {
    variant:ThemeColorType;
    index:number;
    value:string;
    removeTag:(index:number)=>any;
}

export interface AlertProps extends BoxProps {
    onClose?: () => void;
    isVisible:boolean;
    setIsVisible:(isVisible:boolean)=>void;
}

export interface MessageBoxProps extends BoxProps {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    message: string | string[] | Record<string, any> | null | undefined;
    setMessage: (message: any) => void;
    title?: string;
    maxWidth?: string;
}

export type SimpleButtonProps = Pick<ButtonProps, "text" | "size" | "customClasses" | "icon" | "onClick">;