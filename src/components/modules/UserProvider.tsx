// context/UserContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { UserContextType } from '../../core/interfaces';
import type { User } from '../../core/types';
import api from '../../core/api';
import Cookies from 'js-cookie';

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const isAuthenticated = !!user && !!accessToken;

    const login = (userData: User, accessToken: string, refreshToken:string) => {
        setUser(userData);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        Cookies.set("accessToken", "", { expires:0, secure: true, sameSite: 'strict' });
        Cookies.set("refreshToken", "", { expires:0, secure: true, sameSite: 'strict' });
    };

    const verifyUser = async () => {
        try {
            const response = await api.get("/auth/me");

            setUser({
                id:response.data.id,
                username:response.data.username,
                email:response.data.email,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                gender:response.data.gender
            });

            setAccessToken(response.data.accessToken);
            setRefreshToken(response.data.refreshToken);
        } catch (err) {
            console.error("Az újra-hitelesítés sikertelen", err);
            logout();
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=> {
        if(!accessToken) return;

        Cookies.set("accessToken", accessToken, { expires: 1/48, secure: true, sameSite: 'strict' });
    }, [accessToken]);

    useEffect(()=> {
        if(!refreshToken) return;

        Cookies.set("refreshToken", refreshToken, { expires: 1, secure: true, sameSite: 'strict' });
    }, [refreshToken]);

    useEffect(() => {
        verifyUser();
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            accessToken,
            isAuthenticated,
            loading,
            login,
            logout,
            setLoading
        }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    
    return context;
}