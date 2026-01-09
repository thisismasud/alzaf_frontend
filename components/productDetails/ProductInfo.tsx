import React from 'react'
import type { Product } from '@/lib/data/products'
import Rating from './Rating';
import AddToCartButton from './AddToCartButton';
import BrandName from './BrandName';

const ProductInfo = ({product}: {product: Product}) => {
    const { name, brand, price, description, rating, stock } = product;
  return (
    <div className="w-full md:w-1/2 space-y-5">
        <BrandName brand={brand} name={name}/>

        {/* Rating*/}
        <div className="flex items-center gap-2">
          <Rating rating={rating}/>
          {stock > 0 && (
            <span className="ml-3 text-sm font-medium text-green-600">
              In stock ({stock} available)
            </span>
          )}
        </div>

        {/* Price */}
        <div
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content="BDT" />
          <meta itemProp="price" content={price.toString()} />
          <meta itemProp="availability" content={stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"} />
          <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
          <p className="text-3xl font-bold text-gray-900">
            ৳{price.toFixed(2)}
          </p>
        </div>

        {/* Description */}
        <div
          itemProp="description"
          className="text-gray-700 leading-relaxed"
        >
          {description}
        </div>

        {/* Add to cart */}
        <div className="pt-3">
          <AddToCartButton stock={stock}/>
        </div>
      </div>
  )
}

export default ProductInfo