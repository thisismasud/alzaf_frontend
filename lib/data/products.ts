import { siteConfig } from "../config/site-config";

type ProductsApiResponse = {
    success: boolean;
    data: {
        products: Product[];
        pagination: PaginationType;
        filters: {
            categories: string[];
            appliedFilters:AppliedFilters
        }

    }
}
export type PaginationType = {
    currentPage: number;
    totalPages: number;
    totalProducts: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
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
export type AppliedFilters = {
    category: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    search: string | null;
    sort: string | null;
}

export async function getProducts(page:number = 1): Promise<ProductsApiResponse> {
    const products = await fetch(siteConfig.api.products+`?page=${page}`, { cache: "no-store" } );
    const response = await products.json();

    return response;
}
