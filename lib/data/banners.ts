import { siteConfig } from "../config/site-config";

type BannerResponse = {
  success: boolean;
  data: {
    banners: Banner[];
    total: number;
  };
};

export type Banner = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  order: number;
  active: boolean;
};

export async function getHeroBanners(): Promise<BannerResponse> {
  const banners = await fetch(siteConfig.api.banners);
  const response = await banners.json();

  return response;
}
