import api from "../../core/api";
import type { Product } from "../../core/types";

export default class Products {
    public async getProducts():Promise<Product|never> {
        try {
            const response = await api.get("/products");
            return response.data as Product;
        } catch(err:any) {
            console.log(err);

            if(err.response) {
                throw err.response.data;
            } else {
                throw "Unexpected error happened. Please, try again later!";
            }
        }
    }
}