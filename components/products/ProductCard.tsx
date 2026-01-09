import type { Product } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const isInStock = product.stock > 0;

  const availabilitySchema = isInStock
    ? "https://schema.org/InStock"
    : "https://schema.org/OutOfStock";

  return (
    <article
      aria-label="Product Card"
      itemScope
      itemType="https://schema.org/Product"
      className="flex flex-col justify-between rounded-md p-5 bg-slate-50 max-w-[350px]  w-full hover:shadow-lg transition-shadow"
    >
      {/* Schema meta */}
      <meta itemProp="sku" content={product.id.toString()} />
      <meta itemProp="brand" content={product.brand} />
      <meta itemProp="description" content={product.description} />

      {/* Product content */}
      <Link
        href={`/products/${product.id}`}
        aria-label={`View details of ${product.name}`}
        className="flex flex-col items-center w-full px-4 pt-4"
      >
        {/* Image */}
        <div className="relative w-[180px] h-[190px] text-slate-800">
          <Image
            src={product.image}
            alt={`${product.name} by ${product.brand}`}
            fill
            className="object-cover rounded-2xl"
            itemProp="image"
            sizes="150px"
            priority={false}
            unoptimized
          />
        </div>

        {/* Info */}
        <div className="flex flex-col items-center text-center py-3 w-full">
          <h3
            itemProp="name"
            className="text-base md:text-lg font-semibold text-slate-800"
          >
            {product.name}
          </h3>

          {/* Offer schema */}
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="availability" content={availabilitySchema} />
            <meta itemProp="priceCurrency" content="BDT" />
            <meta itemProp="price" content={product.price.toString()} />
          </div>

          {/* Rating & Stock */}
          <div className="flex items-center gap-2 text-sm mt-2 mb-8">
            <span itemProp="rating" className="border-r border-slate-400 pr-2">
              {product.rating}
            </span>
            <span className={isInStock ? "text-green-600" : "text-red-600"}>
              {isInStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </Link>

      {/* Price & Action */}
      <div className="flex items-center mt-auto gap-5 px-4">
        <p className=" text-center text-lg font-semibold text-slate-900">
          ৳ {product.price}
        </p>
        <button
          disabled={!isInStock}
          className="flex-1 py-2 border border-slate-800 rounded-md text-slate-900 font-semibold disabled:bg-slate-400 disabled:cursor-not-allowed cursor-pointer hover:text-slate-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
