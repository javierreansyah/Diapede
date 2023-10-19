import React from "react";

export default function Navbar({ fixed }) {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-white-500 p-6 shadow-lg">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <span class="font-semibold text-xl tracking-tight">Diapede</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray mr-4">
              Home
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray">
              Kontak Sekarang
            </a>
          </div>
          <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border-2 border-gray-500 rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 shadow-md">Cek Sekarang</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
