import type { Product } from "@/lib/data/products";
import Image from "next/image";
import ProductInfo from "./ProductInfo";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { name, brand, image,} = product;

  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="product-details flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6"
    >
      {/* Image */}
      <div className="shrink-0 w-full md:w-1/2">
        {image ? (
          <Image
            src={image.trim()} 
            alt={`${name} by ${brand}`}
            width={600}
            height={600}
            className="w-full h-auto object-contain bg-white rounded-xl shadow-sm"
            priority
          />
        ) : (
          <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}
      </div>

      {/* Info */}
      <ProductInfo product={product}/>
    </article>
  );
};

export default ProductDetails;