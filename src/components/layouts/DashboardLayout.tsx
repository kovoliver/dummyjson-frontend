import { Link, Outlet, useLocation } from "react-router-dom";
import { BoxSecondary } from "../ui/Boxes";
import { useUser } from "../modules/UserProvider";
import { ButtonWarning } from "../ui/Buttons";
import GlobalNotifications from "../modules/GlobalNotifications";
import GlobalConfirmation from "../modules/GlobalConfirmations";

export default function DashboardLayout() {
    const location = useLocation();
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
            <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200 max-w-md mx-auto my-10">
                <p className="text-red-600 font-semibold mb-4">You should log in in order to see this page!</p>
            
                <Link to="/">
                    <ButtonWarning text="log in"/>
                </Link>
            </div>
        );
    }

    const highlightMenu = (menu:string)=> {
        return location.pathname === menu ? 
        "bg-accent p-2" 
        : "bg-secondary p-2";
    };

    return(
        <div className="grid grid-cols-12 max-w-6xl mx-auto gap-4">
            <nav className="lg:col-span-3 sm:col-span-12 col-span-12">
                <BoxSecondary rounded="rounded-none" padding="none">
                    <ul className="block">
                        <li className={highlightMenu("/user/profile")}>
                            <Link to="/user/profile">
                                Profile
                            </Link> 
                        </li>
                        <li className={highlightMenu("/user/products")}>
                            <Link to="/user/products">
                                Products
                            </Link> 
                        </li>
                    </ul>
                </BoxSecondary>
            </nav>
            <div className="lg:col-span-9 sm:col-span-12 col-span-12">
                <GlobalNotifications/>
                <GlobalConfirmation/>
                <Outlet/>
            </div>
        </div>
    );
}