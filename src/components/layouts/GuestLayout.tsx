import { Outlet } from "react-router-dom";
import GlobalNotifications from "../modules/GlobalNotifications";
import GlobalConfirmation from "../modules/GlobalConfirmations";

export default function GuestLayout() {
    return (
        <div className="max-w-6xl mx-auto rounded-md bg-amber-50 border border-[color-mix(in_oklch,var(--color-accent),black_5%)] p-10">
            <GlobalNotifications/>
            <GlobalConfirmation/>
            <Outlet />
        </div>
    );
}