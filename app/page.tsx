import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/products/Products";


export default async function Home({searchParams}: {searchParams: Promise<{ [key: string]: string | string[] | undefined}>}) {
    const params = await searchParams;
  return (
    <main aria-label="Main Section">
        <HeroSection/>
        <Products params={params}/>
    </main>
  );
}
