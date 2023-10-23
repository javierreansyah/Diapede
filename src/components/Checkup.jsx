import React from "react";

const Checkup = () => {
  return (
    <div class="h-full bg-hero bg-cover">
      <div class="h-24"></div>
      <div class="h-12"></div>

      <div class="mx-44 my-5">
        <h1 class="mb-6 mt-12 text-5xl font-extrabold text-web-dark">
          Lengkapi Informasi Anda
        </h1>
        <p class="font-base mb-12 max-w-2xl text-lg text-web-dark">
          Gunakan informasi yang akurat berdasarkan hasil laboratorium. Data
          yang tidak akurat akan berpengaruh terhadap hasil analisis kami.
        </p>

        <div class="max-w-2xl rounded-2xl bg-web-pure p-12 shadow-xl">
          <form
            action="https://formsubmit.co/javierreansyah@gmail.com"
            method="POST"
          >
            <div class="flex gap-10">
              <div class="flex-1">
                <label id="kelamin" class="formlabel">
                  Kelamin
                </label>
                <select name="kelamin" class="forminput">
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div class="flex-1">
                <label id="umur" class="formlabel">
                  Umur
                </label>
                <input
                  id="umur"
                  name="umur"
                  type="number"
                  required
                  placeholder="Umur"
                  class="forminput"
                ></input>
              </div>
            </div>

            <div class="flex gap-10">
              <div class="my-3 flex-1">
                <label id="berat-badan" class="formlabel">
                  Berat Badan kg
                </label>
                <input
                  id="berat-badan"
                  name="iberat-badan"
                  type="number"
                  required
                  placeholder="Berat Badan"
                  class="forminput"
                ></input>
              </div>
              <div class="my-3 flex-1">
                <label id="tinggi" class="formlabel">
                  Tinggi cm
                </label>
                <input
                  id="tinggi"
                  name="tinggi"
                  type="number"
                  required
                  placeholder="Tinggi Badan"
                  class="forminput"
                ></input>
              </div>
            </div>

            <div class="flex gap-10">
              <div class="my-3 flex-1">
                <label id="glukosa" class="formlabel">
                  Kadar Glukosa Tubuh
                </label>
                <input
                  id="glukosa"
                  name="glukosa"
                  type="number"
                  required
                  placeholder="Kadar Glukosa Tubuh"
                  class="forminput"
                ></input>
              </div>
              <div class="my-3 flex-1">
                <label id="insulin" class="formlabel">
                  Kadar Insulin Tubuh
                </label>
                <input
                  id="insulin"
                  name="insulin"
                  type="number"
                  required
                  placeholder="Kadar Insulin Tubuh"
                  class="forminput"
                ></input>
              </div>
            </div>

            <div class="flex gap-10">
              <div class="my-3 flex-1">
                <label id="hamil" class="formlabel">
                  Hamil
                </label>
                <select id="hamil" name="hamil" class="forminput">
                  <option value="Tidak">Tidak</option>
                  <option value="Ya">Ya</option>
                </select>
              </div>
              <div class="my-3 flex-1">
                <label id="faktor Genetik" class="formlabel">
                  Faktor Genetik
                </label>
                <input
                  id="faktor Genetik"
                  name="faktor Genetik"
                  type="number"
                  required
                  placeholder="Faktor Genetik"
                  class="forminput"
                ></input>
              </div>
            </div>

            <div class="flex gap-10">
              <div class="my-3 flex-1">
                <label id="tekanan Darah" class="formlabel">
                  Tekanan Darah mm/hg
                </label>
                <input
                  id="tekanan Darah"
                  name="tekanan Darah"
                  type="number"
                  required
                  placeholder="Tekanan Darah mm/hg"
                  class="forminput"
                ></input>
              </div>
            </div>

            <div class="flex gap-10">
              <div class="my-3 flex-1">
                <label id="email" class="formlabel">
                  Alamat Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  class="forminput"
                ></input>
              </div>
            </div>
            <p class="font-base mb-3 max-w-md text-base text-web-dark">
              Website kami tidak menyimpan hasil analisis anda. Kami akan
              mengirimkan hasil analisis melalui email.
            </p>
            <div>
              <button
                type="submit"
                class="mt-2 rounded-lg bg-web-cyan px-3 py-2 text-base font-semibold text-web-pure shadow-sm hover:text-gray-100"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="h-24"></div>
      <div class="h-24"></div>
      <div class="h-24"></div>
    </div>
  );
};

export default Checkup;
