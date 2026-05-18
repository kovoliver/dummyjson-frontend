import { cva } from "class-variance-authority";

export const ThemeColor = {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger",
    Warning: "warning",
    Main: "main",
    Accent: "accent",
    White: "white",
    Black: "black",
    Gray: "gray",
} as const;

export type ThemeColorType = typeof ThemeColor[keyof typeof ThemeColor];

export const paddings = {
    sm: "p-0.5",
    md: "p-2",
    lg: "p-4",
    xl: "p-8",
    xxl: "p-10"
};

export const inputPaddings = {
    sm: "px-[4px] py-[6px]",
    md: "px-[6px] py-[8px]",
    lg: "px-[8px] py-[10px]",
    xl: "px-[10px] py-[12px]",
};

export const inputSizes = {
    xs: "px-0.5 py-0.5",
    sm: "px-1 py-0.5 text-sm",
    md: "px-2 py-1",
    lg: "px-3 py-2 text-lg",
    xl: "px-4 py-3 text-lg"
}

export const fontSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
    xl: "text-2xl",
};

export const InputVariants = cva(
    "rounded-sm bg-gray-50 border-2 outline-none",
    {
        variants: {
            variant: {
                primary: "border-primary text-black focus:ring-1 focus:ring-primary",
                secondary: "border-secondary text-black focus:ring-1 focus:ring-secondary",
                danger: "border-danger text-black focus:ring-1 focus:ring-danger",
                main: "border-main text-black focus:ring-1 focus:ring-main",
                accent: "border-accent text-black focus:ring-1 focus:ring-accent",
            },
            size: inputSizes
        },
        defaultVariants: {
            variant: "main",
            size: "md"
        }
    }
);

export const ButtonVariants = cva(
    "rounded-sm border-2 cursor-pointer transition-all outline-none focus:outline-none active:scale-[0.98]",
    {
        variants: {
            variant: {
                primary: `
                bg-primary text-white
                border-[color-mix(in_oklch,var(--color-primary),black_25%)]
                hover:bg-[color-mix(in_oklch,var(--color-primary),white_10%)]
                active:bg-[color-mix(in_oklch,var(--color-primary),white_20%)]
                `,
                secondary: `
                bg-secondary text-black
                border-[color-mix(in_oklch,var(--color-secondary),black_25%)]
                hover:bg-[color-mix(in_oklch,var(--color-secondary),white_10%)]
                active:bg-[color-mix(in_oklch,var(--color-secondary),white_20%)]
                `,
                danger: `
                bg-danger text-white
                border-[color-mix(in_oklch,var(--color-danger),black_25%)]
                hover:bg-[color-mix(in_oklch,var(--color-danger),white_10%)]
                active:bg-[color-mix(in_oklch,var(--color-danger),white_20%)]
                `,
                main: `
                bg-main text-white
                border-[color-mix(in_oklch,var(--color-main),black_25%)]
                hover:bg-[color-mix(in_oklch,var(--color-main),white_10%)]
                active:bg-[color-mix(in_oklch,var(--color-main),white_20%)]
                `,
                accent: `
                bg-accent text-black
                border-[color-mix(in_oklch,var(--color-accent),black_25%)]
                hover:bg-[color-mix(in_oklch,var(--color-accent),white_10%)]
                active:bg-[color-mix(in_oklch,var(--color-accent),white_20%)]
                `,
            },
            size: inputSizes,
        },
        defaultVariants: {
            variant: "main",
            size: "md",
        },
    }
);