import { Link, useLocation } from "react-router-dom";
import { BoxSecondary } from "../ui/Boxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../providers/UserProvider";

export default function Navbar() {
    const location = useLocation();
    const { logout } = useUser();

    const highlightMenu = (menu:string)=> {
        return location.pathname === menu ? 
        "bg-accent" 
        : "bg-secondary";
    };

    return (
        <nav className="lg:col-span-3 sm:col-span-12 col-span-12">
            <BoxSecondary rounded="rounded-none" padding="none">
                <ul className="block">
                    <li className={highlightMenu("/user/profile") + " p-2"}>
                        <Link to="/user/profile">
                            Profile
                        </Link>
                    </li>
                    <li className={highlightMenu("/user/products") + " p-2"}>
                        <Link to="/user/products">
                            Products
                        </Link>
                    </li>
                    <li className="p-2 bg-secondary">
                        <span onClick={logout} className="cursor-pointer">
                            Logout
                            <FontAwesomeIcon
                                icon="right-from-bracket"
                            />
                        </span>
                    </li>
                </ul>
            </BoxSecondary>
        </nav>
    );
}