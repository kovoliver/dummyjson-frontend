import axios, { type AxiosInstance } from "axios";
import Cookies from "js-cookie";

const api: AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials:true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Hiba:", error.response?.data?.message || "Hálózati hiba");
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('accessToken');

        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    }
);

export default api;