// context/UserContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { UserContextType } from '../../core/interfaces';
import type { User } from '../../core/types';
import api from '../../core/api';

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const isAuthenticated = !!user && !!accessToken;

    const login = (userData: User, token: string) => {
        setUser(userData);
        setAccessToken(token);
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
    };

    const verifyUser = async () => {
        try {
            const response = await api.get("/auth/me", {
                headers: {
                    'Authorization':`Bearer ${accessToken}`
                }
            });

            setUser({
                id:response.data.id,
                username:response.data.username,
                email:response.data.email,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                gender:response.data.gender
            });

            setAccessToken(response.data.accessToken);
        } catch (err) {
            console.error("Az újra-hitelesítés sikertelen", err);
            logout();
        } finally {
            setLoading(false);
        }
    };

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