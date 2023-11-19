import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white shadow-lg">
        <nav className="container flex h-20 w-full items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-extrabold text-web-dark hover:text-gray-400"
          >
            Diapede
          </Link>

          <Link
            to="/checkup"
            className="rounded-lg bg-web-cyan px-3 py-2 text-sm font-semibold text-web-pure shadow-sm hover:text-gray-100"
          >
            Cek Sekarang
          </Link>
        </nav>
      </div>
      <div className="h-20 w-full"></div>
    </>
  );
};

export default Navbar;
