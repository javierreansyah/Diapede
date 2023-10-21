import React from 'react'

const Checkup = () => {
  return (
    <div class='bg-hero bg-cover h-full'>
      <div class='h-24'></div>
      <div class='h-12'></div>

      <div class='mx-44 my-5'>
        <h1 class='font-extrabold text-web-dark text-5xl mt-12 mb-6'>Lengkapi Informasi Anda</h1>
        <p class='font-base text-web-dark text-lg mb-12 max-w-2xl'>Gunakan informasi yang akurat berdasarkan hasil laboratorium. Data yang tidak akurat akan berpengaruh terhadap hasil analisis kami.</p>

        <div class='p-12 bg-web-pure shadow-xl rounded-2xl max-w-2xl'>

          <form action='https://formsubmit.co/javierreansyah@gmail.com' method='POST'>
            <div class='flex gap-10'>
              <div class='flex-1'>
                <label id='kelamin' class='formlabel'>Kelamin</label>
                <select name='kelamin' class='forminput'>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div class='flex-1'>
                <label id='umur' class='formlabel'>Umur</label>
                <input id='umur' name='umur' type='number' required placeholder='Umur' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='berat-badan' class='formlabel'>Berat Badan kg</label>
                <input id='berat-badan' name='iberat-badan' type='number' required placeholder='Berat Badan' class='forminput'></input>
              </div>
              <div class='my-3 flex-1'>
                <label id='tinggi' class='formlabel'>Tinggi cm</label>
                <input id='tinggi' name='tinggi' type='number' required placeholder='Tinggi Badan' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='glukosa' class='formlabel'>Kadar Glukosa Tubuh</label>
                <input id='glukosa' name='glukosa' type='number' required placeholder='Kadar Glukosa Tubuh' class='forminput'></input>
              </div>
              <div class='my-3 flex-1'>
                <label id='insulin' class='formlabel'>Kadar Insulin Tubuh</label>
                <input id='insulin' name='insulin' type='number' required placeholder='Kadar Insulin Tubuh' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='hamil' class='formlabel'>Hamil</label>
                <select id='hamil' name='hamil' class='forminput'>
                  <option value="Tidak">Tidak</option>
                  <option value="Ya">Ya</option>
                </select>
              </div>
              <div class='my-3 flex-1'>
                <label id='faktor Genetik' class='formlabel'>Faktor Genetik</label>
                <input id='faktor Genetik' name='faktor Genetik' type='number' required placeholder='Faktor Genetik' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='tekanan Darah' class='formlabel'>Tekanan Darah mm/hg</label>
                <input id='tekanan Darah' name='tekanan Darah' type='number' required placeholder='Tekanan Darah mm/hg' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='email' class='formlabel'>Alamat Email</label>
                <input id='email' name='email' type='email' required placeholder='Email' class='forminput'></input>
              </div>
            </div>
            <p class='font-base text-web-dark text-base max-w-md mb-3'>Website kami tidak menyimpan hasil analisis anda. Kami akan mengirimkan hasil analisis melalui email.</p>
            <div>
              <button type='submit' class='mt-2 py-2 px-3 font-semibold rounded-lg bg-web-cyan text-web-pure hover:text-gray-100 text-base shadow-sm'>Kirim</button>
            </div>

          </form>
        </div>
      </div>
      <div class='h-24'></div>
      <div class='h-24'></div>
      <div class='h-24'></div>
      
    </div>
  )
}

export default Checkup