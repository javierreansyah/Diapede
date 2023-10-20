import React from 'react'

const Navbar = () => {
  return (
    <div class='shadow-lg fixed top-0 bg-white w-full z-50'>
      <div class='flex justify-center flex-shrink-0'>
        <nav class='w-full mx-44 flex justify-between items-center'>
          <a href='' class='py-7 font-extrabold text-web-dark hover:text-gray-400 text-3xl'>
            Diapede
          </a>
          <div class=''>
            <a href='' class='mx-3 font-regular text-web-dark hover:text-gray-400 text-base'>
              Home
            </a>
            <a href='' class='mx-3 font-regular text-web-dark hover:text-gray-400 text-base'>
              Kontak Kami
            </a>
            <a href='' class='mx-3 p-3 font-semibold rounded-lg bg-web-cyan text-web-pure hover:text-gray-100 text-base shadow-sm'>
              Cek Sekarang
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar