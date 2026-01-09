const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const siteConfig = {
  api: {
    base: API_URL,
    banners: `${API_URL}/banners`,
    categories: `${API_URL}/categories`,
    products: `${API_URL}/products`,
    singleProduct: `${API_URL}/products/`,
  },
};
