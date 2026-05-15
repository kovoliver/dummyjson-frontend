export type Review = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export type Product = {
    id:number;
    brand:string;
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    images:string[];
    thumbnail:string;
    reviews:Review[];
}