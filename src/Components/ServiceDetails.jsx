import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 
                      rounded-3xl shadow-2xl p-10 text-center max-w-md w-full space-y-6">

        <h1 className="text-4xl font-semibold tracking-tight">
          More Services
        </h1>

        <p className="text-gray-300 text-lg">
          Choose us for fast, reliable and professional solutions ✨
        </p>

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-500 
                     hover:scale-105 hover:shadow-xl 
                     transition duration-300 text-white font-medium 
                     py-3 rounded-xl"
        >
          ← Go Back
        </button>

      </div>
    </div>
  );
};

export default ServiceDetails;
