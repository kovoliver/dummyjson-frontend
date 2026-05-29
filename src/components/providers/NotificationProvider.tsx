import { createContext, useContext, useState, type ReactNode } from "react"
import type { NotificationContextType } from "../../core/interfaces";
import type { ThemeColorType } from "../../core/theme";

export const NotifyContext = createContext<NotificationContextType|null>(null);

export default function NotificationProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState<string|string[]|Record<string,any>|null>(null);
    const [messageType, setMessageType] = useState<ThemeColorType>("success");
    const [isVisible, setIsVisible] = useState(false);

    return(
        <NotifyContext.Provider value={{
            message, setMessage, 
            messageType, setMessageType,
            isVisible, setIsVisible
        }}>
            {children}
        </NotifyContext.Provider>
    )
}

export function useNotify() {
    const context = useContext(NotifyContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    
    return context;
}