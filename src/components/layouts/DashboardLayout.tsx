import { Link, Navigate, Outlet } from "react-router-dom";
import { useUser } from "../providers/UserProvider";
import { ButtonWarning } from "../ui/Buttons";
import GlobalNotifications from "../overlays/GlobalNotifications";
import GlobalConfirmation from "../overlays/GlobalConfirmations";
import Navbar from "../global_components/Navbar";

export default function DashboardLayout() {
    const { user, loading, isAuthenticated } = useUser();

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-100">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-main"></div>
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return (
             <Navigate to="/" replace />
        );
    }

    return(
        <div className="grid grid-cols-12 max-w-6xl mx-auto gap-4">
            <Navbar/>

            <div className="lg:col-span-9 sm:col-span-12 col-span-12">
                <GlobalConfirmation/>
                <GlobalNotifications/>
                <Outlet/>
            </div>
        </div>
    );
}