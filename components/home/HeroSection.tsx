import { getHeroBanners } from "@/lib/data/banners";
import HeroBanner from "./HeroBanner";

const HeroSection = async () => {
  const result = await getHeroBanners();
  if (!result.success) {
    return <div>Something went wrong</div>;
  }

  return (
    <section aria-label="Hero Section">
      <HeroBanner banners={result.data.banners} />
    </section>
  );
};

export default HeroSection;
