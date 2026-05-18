import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlus, faTrash, faCheck,
    faXmark, faChevronRight,
    faChevronLeft, faEllipsisVertical,
    faGear, faUser, faMagnifyingGlass,
    faFloppyDisk, faCircleXmark,
    faRightToBracket
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuestLayout from './components/layouts/GuestLayout';
import DashboardLayout from './components/layouts/DashboardLayout';
import { UserProvider } from './components/modules/UserProvider';
import Login from './views/Login';

library.add(
    faPlus, faTrash, faCheck,
    faXmark, faChevronRight, faChevronLeft,
    faEllipsisVertical, faGear, faUser,
    faMagnifyingGlass, faFloppyDisk, faCircleXmark,
    faRightToBracket
);

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<GuestLayout />}>
                        <Route path="/login" element={<Login/>}/>
                    </Route>

                    <Route element={<DashboardLayout />}>
                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App;