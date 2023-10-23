import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="fixed top-0 z-50 w-full bg-white shadow-lg">
      <div class="flex flex-shrink-0 justify-center">
        <nav class="mx-44 flex h-24 w-full items-center justify-between">
          <Link
            to="/"
            class="text-3xl font-extrabold text-web-dark hover:text-gray-400"
          >
            Diapede
          </Link>
          <div class="">
            <Link
              to="/"
              class="font-regular mx-3 text-base text-web-dark hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="/contact"
              class="font-regular mx-3 text-base text-web-dark hover:text-gray-400"
            >
              Kontak Kami
            </Link>
            <Link
              to="/checkup"
              class="mx-3 rounded-lg bg-web-cyan p-3 text-base font-semibold text-web-pure shadow-sm hover:text-gray-100"
            >
              Cek Sekarang
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
