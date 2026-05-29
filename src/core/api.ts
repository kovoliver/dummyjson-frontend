import axios, { type AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { useUserStore } from "./stores/userStore";

const api: AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

const handleLoadingState = (method: string | undefined, shouldLoad: boolean) => {
    const setFetching = useUserStore.getState().setFetching;
    const setSubmitting = useUserStore.getState().setSubmitting;

    if (!method) {
        setFetching(false);
        setSubmitting(false);

        console.error("CRITICAL: Undefined HTTP method in the axios interceptor!");
        return; 
    }

    const normalizedMethod = method.toUpperCase();

    if (normalizedMethod === "GET") {
        setFetching(shouldLoad);
    } else {
        setSubmitting(shouldLoad);
    }
};

api.interceptors.request.use(
    (config) => {
        handleLoadingState(config.method, true);

        const token = Cookies.get('accessToken');
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        handleLoadingState(error.config?.method, false);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        handleLoadingState(response.config.method, false);
        return response;
    },
    (error) => {
        handleLoadingState(error.config?.method, false);
        console.error("API Hiba:", error.response?.data?.message || "Hálózati hiba");
        return Promise.reject(error);
    }
);

export default api;