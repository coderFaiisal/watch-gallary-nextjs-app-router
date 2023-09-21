import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  // Server-Side Rendering (SSR) data fetching
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default ProductDetailsPage;
