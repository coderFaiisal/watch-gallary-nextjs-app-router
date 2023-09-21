import Products from "@/components/UI/Products";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/watches");
  const data = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data?.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
