import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlus, faTrash, faCheck,
    faXmark, faChevronRight,
    faChevronLeft, faEllipsisVertical,
    faGear, faUser, faMagnifyingGlass,
    faFloppyDisk, faCircleXmark,
    faRightToBracket,
    faSignIn,
    faCaretRight,
    faCaretLeft,
    faUpRightFromSquare,
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuestLayout from './components/layouts/GuestLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import { UserProvider } from './components/providers/UserProvider';
import Login from './views/guest/Login';
import NotificationProvider from './components/providers/NotificationProvider';
import ProfilePage from './views/user/ProfilePage';
import ProductsPage from './views/user/ProductsPage';
import ProductPage from './views/user/ProductPage';
import ConfirmationProvider from './components/providers/ConfirmationProvider';

library.add(
    faPlus, faTrash, faCheck,
    faXmark, faChevronRight, faChevronLeft,
    faEllipsisVertical, faGear, faUser,
    faMagnifyingGlass, faFloppyDisk, faCircleXmark,
    faRightToBracket, faSignIn, faCaretRight,
    faCaretLeft, faUpRightFromSquare,
    faArrowUpRightFromSquare
);

function App() {
    return (
        <NotificationProvider>
            <ConfirmationProvider>
                <UserProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<GuestLayout />}>
                                <Route path="/" element={<Login/>}/>
                            </Route>

                            <Route element={<DashboardLayout />}>
                                <Route path="/user/profile" element={<ProfilePage/>}/>
                                <Route path="/user/products" element={<ProductsPage/>}/>
                                <Route path="/user/product" element={<ProductPage/>}/>
                                <Route path="/user/product/:id" element={<ProductPage/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserProvider>
            </ConfirmationProvider>
        </NotificationProvider>
    )
}

export default App;