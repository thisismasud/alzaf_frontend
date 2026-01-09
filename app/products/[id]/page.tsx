import ProductDetails from "@/components/productDetails/ProductDetails";
import { getSingleProduct } from "@/lib/data/singleProduct";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const result = await getSingleProduct(Number(id));

  if (result.success) {
    return <ProductDetails product={result.data.product} />;
  } else {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] text-2xl text-slate-800">
        Product not found!
      </div>
    );
  }
};

export default ProductDetailsPage;
