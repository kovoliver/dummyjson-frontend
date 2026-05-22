export type Review = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export type Product = {
    id: number;
    brand: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    images: string[];
    thumbnail: string;
    reviews: Review[];
}

export type ProductResponse = {
    products:Product[];
    total:number;
    skip:number;
    limit:number;
}

export type AuthResponse = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken:string;
};

export type User = Pick<AuthResponse, "id" | "username" | "email" | "firstName" | "lastName" | "gender">;

export type UserLogin = {
    username: string;
    password: string;
};

export type FormErrors<T> = { [K in keyof T]?: string | null };