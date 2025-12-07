import React from "react";
import Custom from "./Custom";

const App = () => {
  const [data] = Custom("https://dummyjson.com/products");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 classname="text-lg font-semibold">{product.title}</h2>

            <p className="text-gray-600 text-sm mt-1">
              Price: <span className="font-medium">${product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
