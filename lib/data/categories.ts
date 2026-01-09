import { siteConfig } from "../config/site-config";

type CategoryResponse = {
  success: boolean;
  data: {
    categories: Category[];
    total: number;
  };
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export async function getCategories(): Promise<CategoryResponse> {
  const categories = await fetch(siteConfig.api.categories);
  const response = await categories.json();

  return response;
}
