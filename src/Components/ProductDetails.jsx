import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                      rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6">

        <h1 className="text-4xl font-semibold text-white tracking-tight">
          {name}
        </h1>

        <p className="text-gray-300 text-lg">
          Here you can view full product details, pricing and updates.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-500 
                     hover:scale-105 hover:shadow-xl transition duration-300 
                     text-white py-3 rounded-xl font-medium"
        >
          ← Go Back
        </button>

      </div>

    </div>
  );
};

export default ProductDetails;
