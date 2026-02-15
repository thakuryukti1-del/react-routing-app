import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: "Product 1", desc: "Premium quality service" },
  { id: "Product 2", desc: "Fast & reliable solution" },
  { id: "Product 3", desc: "Affordable pricing" },
];

const Product = () => {
  const navigate = useNavigate();

  const navigateHandler = (name) => {
    navigate(`/product/detail/${name}`);
  };

  return (
    <div className="min-h-[80vh] p-8 space-y-10">

      {/* Header */}
      <h1 className="text-5xl font-semibold text-center tracking-tight">
        Our Products
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                       rounded-2xl p-6 text-center shadow-xl 
                       hover:scale-105 hover:shadow-2xl transition duration-300 space-y-4"
          >
            <h2 className="text-2xl font-medium">{item.id}</h2>

            <p className="text-gray-300 text-sm">
              {item.desc}
            </p>

            <button
              onClick={() => navigateHandler(item.id)}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 
                         text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              See Details →
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Product;
