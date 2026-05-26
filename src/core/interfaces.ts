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

export interface ConfirmationOptions {
    title?: string;
    message: string | string[] | Record<string, any>;
    messageType: "success" | "warning" | "danger" | "info";
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: "primary" | "secondary" | "danger" | "warning" | "main" | "accent";
    cancelVariant?: "primary" | "secondary" | "danger" | "warning" | "main" | "accent";
    confirmIcon: IconProp|undefined;
    cancelIcon: IconProp|undefined;
    onConfirm: () => void | null;
    onCancel?: () => void | null;
}

export interface ConfirmationContextType {
    title: string | undefined;
    message: string | string[] | Record<string, any> | null;
    messageType: "success" | "warning" | "danger" | "info";
    isVisible: boolean;
    confirmText: string;
    cancelText: string;
    confirmVariant: "primary" | "secondary" | "danger" | "warning" | "main" | "accent";
    cancelVariant: "primary" | "secondary" | "danger" | "warning" | "main" | "accent";
    confirmIcon: IconProp|undefined;
    cancelIcon: IconProp|undefined;
    askConfirmation: (options: ConfirmationOptions) => void;
    handleConfirm: () => void;
    handleCancel: () => void;
}

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
    type:"text"|"password"|"email"|"date"|"time"|"number"|"textarea";
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

export interface MessageBoxProps extends BoxProps {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    message: string | string[] | Record<string, any> | null | undefined;
    setMessage: (message: any) => void;
    title?: string;
    maxWidth?: string;
}

export type SimpleButtonProps = Pick<ButtonProps, "text" | "size" | "customClasses" | "icon" | "onClick">;