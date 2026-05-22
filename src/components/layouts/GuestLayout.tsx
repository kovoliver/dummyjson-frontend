import { Outlet } from "react-router-dom";
import Alert from "../ui/Alert";
import { useNotify } from "../modules/NotificationProvider";
import { useEffect } from "react";

export default function GuestLayout() {
    const notifyContext = useNotify();

    const getMessages = () => {
        const msg = notifyContext.message;

        if (!msg) return <p />;

        if (typeof msg === "string") {
            return <p>{msg}</p>;
        }

        if (Array.isArray(msg)) {
            return msg.map((m, i) => <p key={i}>{m}</p>);
        }

        return Object.entries(msg).map(([k, v], i) => (
            <p key={i}>{k}: {v}</p>
        ));
    };

    useEffect(() => {
        if (notifyContext.message)
            notifyContext.setIsVisible(true);
        else
            notifyContext.setIsVisible(false);
    }, [notifyContext.message]);

    return (
        <div className="max-w-6xl mx-auto rounded-md bg-amber-50 border border-[color-mix(in_oklch,var(--color-accent),black_5%)] p-10">
            <Alert
                children={getMessages()}
                variant={notifyContext.messageType}
                isVisible={notifyContext.isVisible}
                setIsVisible={notifyContext.setIsVisible}
                onClose={() => notifyContext.setMessage("")}
            />
            <Outlet />
        </div>
    );
}