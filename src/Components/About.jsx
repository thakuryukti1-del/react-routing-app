import React from "react";

const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 space-y-14">

      {/* Heading */}
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          About Us
        </h1>

        <p className="text-gray-300 text-lg">
          We build modern, fast and user-friendly web experiences using React,
          Routing and Tailwind CSS. Our goal is clean design with smooth UX.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">⚡ Fast</h2>
          <p className="text-gray-300 text-sm">
            Optimized performance and quick loading apps.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🎨 Modern UI</h2>
          <p className="text-gray-300 text-sm">
            Clean and beautiful interfaces with Tailwind CSS.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🔧 Reliable</h2>
          <p className="text-gray-300 text-sm">
            Built with scalable architecture and best practices.
          </p>
        </div>

      </div>

    </div>
  );
};

export default About;
