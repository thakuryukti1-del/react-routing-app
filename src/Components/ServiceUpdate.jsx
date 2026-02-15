import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceUpdate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 p-6">
      
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center space-y-6">
        
        <h1 className="text-4xl font-semibold text-gray-800">
          Service Update
        </h1>

        <p className="text-gray-500 text-lg">
          Get your service updated quickly and easily 
        </p>

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
        >
          ← Go Back
        </button>

      </div>
    </div>
  );
};

export default ServiceUpdate;
