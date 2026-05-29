import { create } from "zustand";
import type { UserContextType } from "../interfaces";
import type { User } from "../types";
import api from "../api";
import Cookies from "js-cookie";

export const useUserStore = create<UserContextType>((set, get) => ({
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    authLoading: true,
    fetching: true,
    submitting: true,

    login: (userData, accessToken, refreshToken) => {
        Cookies.set("accessToken", accessToken, { expires: 1 / 48, secure: true, sameSite: 'strict' });
        Cookies.set("refreshToken", refreshToken, { expires: 1, secure: true, sameSite: 'strict' });

        set({
            user: userData,
            accessToken,
            isAuthenticated: true,
            authLoading: false,
        });
    },

    logout: () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");

        set({
            user: null,
            accessToken: null,
            isAuthenticated: false,
        });
    },

    verifyUser: async () => {
        try {
            const response = await api.get("/auth/me");

            const userData: User = {
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                gender: response.data.gender
            };

            const nextAccessToken = response.data.accessToken;
            const nextRefreshToken = response.data.refreshToken;

            if (nextAccessToken) {
                Cookies.set("accessToken", nextAccessToken, { expires: 1 / 48, secure: true, sameSite: 'strict' });
            }
            if (nextRefreshToken) {
                Cookies.set("refreshToken", nextRefreshToken, { expires: 1, secure: true, sameSite: 'strict' });
            }

            set({
                user: userData,
                accessToken: nextAccessToken,
                isAuthenticated: true,
            });
        } catch (err) {
            console.error("Az újra-hitelesítés sikertelen", err);
            get().logout();
        } finally {
            set({ authLoading: false });
        }
    },

    setAuthLoading: (loading) => set({ authLoading: loading }),
    setFetching: (loading) => set({ fetching: loading }),
    setSubmitting: (loading) => set({ submitting: loading }),
}));