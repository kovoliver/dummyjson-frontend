import { useEffect } from "react";
import { useNotify } from "../providers/NotificationProvider";
import Alert from "../ui/Alert";
import { normalizeMessages } from "../../core/utils";

export default function GlobalNotifications() {
    const notifyContext = useNotify();

    const messages = normalizeMessages(notifyContext.message);

    useEffect(() => {
        notifyContext.setIsVisible(messages.length > 0);
    }, [notifyContext.message]);

    return (
        <div className="max-w-125 mx-auto">
            {messages.map((msg, i) => (
                <Alert
                    key={i}
                    variant={notifyContext.messageType}
                    isVisible={notifyContext.isVisible}
                    setIsVisible={notifyContext.setIsVisible}
                    onClose={() => notifyContext.setMessage(messages.filter((_, index)=>index !== i))}
                    customClasses={["my-3"]}
                >
                    {msg}
                </Alert>
            ))}
        </div>
    );
}