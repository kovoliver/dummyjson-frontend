import { createContext, useContext, useState, type ReactNode } from "react";
import type { ConfirmationContextType, ConfirmationOptions } from "../../core/interfaces";

export const ConfirmContext = createContext<ConfirmationContextType | null>(null);

export default function ConfirmationProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<string | string[] | Record<string, any> | null>(null);
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [messageType, setMessageType] = useState<"success" | "warning" | "danger" | "info">("warning");
    const [isVisible, setIsVisible] = useState(false);

    const [confirmCallback, setConfirmCallback] = useState<() => void | null>();
    const [cancelCallback, setCancelCallback] = useState<() => void | null>();

    const askConfirmation = (options: ConfirmationOptions) => {
        setTitle(options.title);
        setMessage(options.message);
        setMessageType(options.messageType || "warning");
        
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
    };

    return (
        <ConfirmContext.Provider value={{
            isVisible,
            title,
            message,
            messageType,
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