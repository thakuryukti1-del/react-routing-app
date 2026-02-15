import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center p-8 space-y-10">

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-semibold tracking-tight">
          Our Services
        </h1>
        <p className="text-gray-300">
          Explore details or update your service easily ✨
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-6">
        <button
          onClick={() => navigate("detail")}   // relative path better
          className="bg-gradient-to-r from-pink-400 to-purple-500 
                     hover:scale-105 transition duration-300
                     text-white px-6 py-3 rounded-xl shadow-lg"
        >
          More Details
        </button>

        <button
          onClick={() => navigate("update")}
          className="bg-white/10 backdrop-blur-md border border-white/20 
                     hover:bg-white/20 transition 
                     text-white px-6 py-3 rounded-xl shadow-lg"
        >
          Update Service
        </button>
      </div>

      {/* Content Card */}
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
        <Outlet />
      </div>

    </div>
  );
};




export default Service;
