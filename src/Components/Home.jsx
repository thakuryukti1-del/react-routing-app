import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center space-y-8">

      {/* Heading */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        Welcome 👋
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg max-w-xl">
        Explore our products and services built with React, Routing and Tailwind.
        Clean UI. Modern Design. Smooth Experience.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/product")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 
                     text-white shadow-lg hover:scale-105 transition duration-300"
        >
          View Products
        </button>

        <button
          onClick={() => navigate("/service")}
          className="px-6 py-3 rounded-xl border border-white/20 
                     bg-white/10 backdrop-blur-md hover:bg-white/20 
                     transition text-white"
        >
          Our Services
        </button>
      </div>

    </div>
  );
};

export default Home;
