import api from "../core/api";
import { type Product } from "../core/types";

export default class Products {
    public async getProducts(): Promise<Product> {
        try {
            const response = await api.get('/products');
            return response.data as Product;
        } catch (err: any) {
            const errorMessage = 
                err.response?.data?.message || 
                err.message || 
                "Ismeretlen hiba történt a termékek lekérésekor.";

            throw new Error(errorMessage);
        }
    }
}