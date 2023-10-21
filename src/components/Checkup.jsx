import React from 'react'

const Checkup = () => {
  return (
    <div class='bg-web-white h-full'>
      <div class='h-24'></div>

      <div class='mx-44 my-5'>
        <h1>Lengkapi Informasi Anda</h1>

        <div class='p-12 bg-web-pure shadow-xl rounded-2xl max-w-5xl'>

          <form action='#' method='POST'>
            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='kelamin' class='formlabel'>Kelamin</label>
                <select name='kelamin' class='forminput'>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div class='my-3 flex-1'>
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
                  <option value="Laki-Laki">Tidak</option>
                  <option value="Perempuan">Ya</option>
                </select>
              </div>
              <div class='my-3 flex-1'>
                <label id='Faktor Genetik' class='formlabel'>Faktor Genetik</label>
                <input id='Faktor Genetik' name='Faktor Genetik' type='number' required placeholder='Faktor Genetik' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='Tekanan Darah' class='formlabel'>Tekanan Darah mm/hg</label>
                <input id='Tekanan Darah' name='Tekanan Darah' type='number' required placeholder='Tekanan Darah mm/hg' class='forminput'></input>
              </div>
            </div>

            <div class='flex gap-10'>
              <div class='my-3 flex-1'>
                <label id='email' class='formlabel'>Alamat Email</label>
                <input id='email' name='email' type='email' required placeholder='Email' class='forminput'></input>
              </div>
            </div>

            <div>
              <input type="submit" class='mt-2 py-2 px-3 font-semibold rounded-lg bg-web-cyan text-web-pure hover:text-gray-100 text-base shadow-sm'/>
            </div>

          </form>
        </div>
      </div>
      <div class='h-24'></div>
      
    </div>
  )
}

export default Checkup