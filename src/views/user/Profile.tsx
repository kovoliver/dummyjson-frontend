import { useUser } from "../../components/modules/UserProvider";

export default function Profile() {
    const { user, loading, isAuthenticated } = useUser();

    // 1. Töltési állapot kezelése (amíg a verifyUser fut)
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-main"></div>
            </div>
        );
    }

    // 2. Ha nincs bejelentkezett felhasználó
    if (!isAuthenticated || !user) {
        return (
            <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200 max-w-md mx-auto my-10">
                <p className="text-red-600 font-semibold">A profil megtekintéséhez be kell jelentkezned.</p>
            </div>
        );
    }

    // 3. Profil adatok megjelenítése
    return (
        <div className="max-w-md mx-auto my-10 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            {/* Felső dekoratív sáv / Fejléc */}
            <div className="bg-main/10 p-6 text-center border-b border-gray-100">
                <h1 className="text-2xl font-bold text-main">Profil adatok</h1>
                <p className="text-sm text-gray-500 mt-1">@{user.username}</p>
            </div>

            {/* Adat lista */}
            <div className="p-6 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Felhasználónév</span>
                    <span className="text-gray-800 font-semibold">{user.username}</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">E-mail cím</span>
                    <span className="text-gray-800 font-medium">{user.email}</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Vezetéknév</span>
                    <span className="text-gray-800">{user.lastName}</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between border-b border-gray-50 pb-2">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Keresztnév</span>
                    <span className="text-gray-800">{user.firstName}</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between pb-2">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Nem</span>
                    <span className="text-gray-800 capitalize">
                        {user.gender === 'male' ? 'Férfi' : user.gender === 'female' ? 'Nő' : user.gender}
                    </span>
                </div>
            </div>
        </div>
    );
}