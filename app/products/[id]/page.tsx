import ProductDetails from "@/components/productDetails/ProductDetails";
import { getSingleProduct } from "@/lib/data/singleProduct";
import { notFound } from "next/navigation";


const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const result = await getSingleProduct(Number(id));

//   if(!result.success){
//      notFound()
//   }

  return (
    <ProductDetails product={result.data.product} />
  )
};

export default ProductDetailsPage;
