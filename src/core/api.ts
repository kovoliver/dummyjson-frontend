import axios, { type AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
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

export default api;