import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const linkStyle =
    "px-5 py-2 rounded-xl transition duration-200 hover:bg-white/10";

  const activeStyle = "bg-pink-500 text-white shadow-lg";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-center gap-6 py-5">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          Product
        </NavLink>

        <NavLink
          to="/service"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          Service
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-gray-300"}`
          }
        >
          About
        </NavLink>

      </div>
    </nav>
  );
};

export default Nav;
