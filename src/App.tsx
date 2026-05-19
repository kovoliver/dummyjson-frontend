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
    faCaretLeft
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuestLayout from './components/layouts/GuestLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import { UserProvider } from './components/modules/UserProvider';
import Login from './views/guest/Login';
import NotificationProvider from './components/modules/NotificationProvider';
import Profile from './views/user/Profile';
import Products from './views/user/Products';

library.add(
    faPlus, faTrash, faCheck,
    faXmark, faChevronRight, faChevronLeft,
    faEllipsisVertical, faGear, faUser,
    faMagnifyingGlass, faFloppyDisk, faCircleXmark,
    faRightToBracket, faSignIn, faCaretRight,
    faCaretLeft
);

function App() {
    return (
        <NotificationProvider>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<GuestLayout />}>
                            <Route path="/" element={<Login/>}/>
                        </Route>

                        <Route element={<DashboardLayout />}>
                            <Route path="/user/profile" element={<Profile/>}/>
                            <Route path="/user/products" element={<Products/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </NotificationProvider>
    )
}

export default App;