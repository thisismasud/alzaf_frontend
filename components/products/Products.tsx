import type { PaginationType, Product } from "@/lib/data/products";
import { getProducts } from "@/lib/data/products";
import ProductCard from "./ProductCard";
import ProductsPagination from "./ProductsPagination";

const Products = async ({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) => {
  const paramsData = params;
  const currentPage = paramsData.page || 1;
  const results = await getProducts(Number(currentPage));
  let products: Product[];
  let pagination: PaginationType;

  if (results.success) {
    products = results.data.products;
    pagination = results.data.pagination;
  } else {
    return <p>An Error Occurred!</p>;
  }

  return (
    <section aria-label="Products" className="py-5 px-3">
      <div className="flex flex-col my-10">
        <h2 className="text-3xl font-bold">Products</h2>
        <p>{products.length} Products Found for You</p>
      </div>

      <div className="flex flex-wrap gap-12 justify-center items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
      <div className="mt-14 mb-10">
          <ProductsPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
          />
        </div>
    </section>
  );
};

export default Products;
