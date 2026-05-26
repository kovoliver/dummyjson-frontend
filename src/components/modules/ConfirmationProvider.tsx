import { createContext, useContext, useState, type ReactNode } from "react";
import type { ConfirmationContextType, ConfirmationOptions } from "../../core/interfaces";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export const ConfirmContext = createContext<ConfirmationContextType | null>(null);

export default function ConfirmationProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<string | string[] | Record<string, any> | null>(null);
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [messageType, setMessageType] = useState<"success" | "warning" | "danger" | "info">("warning");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const [confirmText, setConfirmText] = useState<string>("OK");
    const [cancelText, setCancelText] = useState<string>("Mégse");
    const [confirmVariant, setConfirmVariant] = useState<"primary" | "secondary" | "danger" | "warning" | "main" | "accent">("main");
    const [cancelVariant, setCancelVariant] = useState<"primary" | "secondary" | "danger" | "warning" | "main" | "accent">("secondary");
    const [confirmIcon, setConfirmIcon] = useState<IconProp | undefined>(undefined);
    const [cancelIcon, setCancelIcon] = useState<IconProp | undefined>(undefined);

    const [confirmCallback, setConfirmCallback] = useState<() => void | null>();
    const [cancelCallback, setCancelCallback] = useState<() => void | null>();

    const askConfirmation = (options: ConfirmationOptions) => {
        setTitle(options.title);
        setMessage(options.message);
        setMessageType(options.messageType || "warning");

        setConfirmText(options.confirmText || "OK");
        setCancelText(options.cancelText || "Mégse");
        setConfirmVariant(options.confirmVariant || "main");
        setCancelVariant(options.cancelVariant || "secondary");
        setConfirmIcon(options.confirmIcon);
        setCancelIcon(options.cancelIcon);

        setConfirmCallback(() => options.onConfirm);

        if (options.onCancel) {
            setCancelCallback(() => options.onCancel);
        }

        setIsVisible(true);
    };

    const handleConfirm = async () => {
        if (confirmCallback) {
            await confirmCallback();
        }
        closeAndReset();
    };

    const handleCancel = () => {
        if (cancelCallback) {
            cancelCallback();
        }
        closeAndReset();
    };

    const closeAndReset = () => {
        setIsVisible(false);
        setMessage(null);
        setTitle(undefined);
        setConfirmCallback(undefined);
        setCancelCallback(undefined);
        setConfirmText("OK");
        setCancelText("Mégse");
        setConfirmVariant("main");
        setCancelVariant("secondary");
        setConfirmIcon(undefined);
        setCancelIcon(undefined);
    };

    return (
        <ConfirmContext.Provider value={{
            isVisible,
            title,
            message,
            messageType,
            confirmText,
            cancelText,
            confirmVariant,
            cancelVariant,
            confirmIcon,
            cancelIcon,
            askConfirmation,
            handleConfirm,
            handleCancel
        }}>
            {children}
        </ConfirmContext.Provider>
    );
}

export function useConfirm() {
    const context = useContext(ConfirmContext);

    if (!context) {
        throw new Error('useConfirm must be used within a ConfirmationProvider');
    }

    return context;
}