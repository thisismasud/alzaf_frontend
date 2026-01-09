import { siteConfig } from "../config/site-config";

type ProductsApiResponse = {
    success: boolean;
    data: {
        product: Product;
        category: CategoryType;
        similarProducts: Product[];
    }
}

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    rating: number;
    brand: string;
    categoryId: number;
    categorySlug: string;
}
export type CategoryType = {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
}

export async function getSingleProduct(id:number): Promise<ProductsApiResponse> {
    const products = await fetch(siteConfig.api.singleProduct+`/${id}`);
    const response = await products.json();

    return response;
}
