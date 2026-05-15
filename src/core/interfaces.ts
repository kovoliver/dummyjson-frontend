import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { paddings, bgColors, textColors, borderColors } from "./theme";

export interface ButtonProps {
    text:string;
    size:keyof typeof paddings;
    textColor:keyof typeof textColors;
    bgColor:keyof typeof bgColors;
    customClasses?:string[]|null;
    icon?:IconProp|null;
    onClick?:(()=>void)|null;
}

export interface InputProps {
    placeholder:string;
    size:keyof typeof paddings;
    textColor:keyof typeof textColors;
    bgColor:keyof typeof bgColors;
    borderColor: keyof typeof borderColors;
    customClasses?:string[]|null;
    onChange?:(()=>void)|null;
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