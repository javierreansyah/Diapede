import React from "react";
import { Link } from "react-router-dom";

import Javier from "../assets/images/javier.jpg";
import Fauzi from "../assets/images/fauzi.jpg";
import Herdi from "../assets/images/herdi.jpg";
import Haikal from "../assets/images/haikal.jpg";
import Indra from "../assets/images/kucing.jpg";

const Heros = () => {
  return (
    <div class="bg-web-white">
      <div class="relative h-web-screen w-full bg-hero bg-cover bg-center bg-no-repeat">
        <div class="mx-44 pb-60 pt-80">
          <div>
            <h1 class="left text-7xl font-extrabold text-web-dark">
              Deteksi Dini
            </h1>
            <h1 class="left text-7xl font-extrabold text-web-dark">Diabetes</h1>
            <p class="left my-5 text-base font-normal text-web-dark">
              Segera cek sekarang
            </p>
            <Link
              to="/checkup"
              class="rounded-lg bg-web-cyan p-3 text-base font-semibold text-web-pure shadow-sm hover:text-gray-100"
            >
              Cek Sekarang
            </Link>
          </div>
        </div>
        <div class="">
          <div class="mx-44 flex justify-center gap-14">
            <div class="h-60 w-96 rounded-lg bg-web-pure p-5 drop-shadow-lg ">
              <div class="pb-2 pt-5 text-center text-base font-extrabold text-web-dark">
                Gratis
              </div>
              <p class="text-center font-normal">
                Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj
                KCnhjabehjknachjikn aeujc uiacnu ienui
              </p>
            </div>
            <div class="h-60 w-96 rounded-lg bg-web-pure p-5 drop-shadow-lg">
              <div class="pb-2 pt-5 text-center text-base font-extrabold text-web-dark">
                Cepat
              </div>
              <p class="text-center font-normal">
                Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj
                KCnhjabehjknachjikn aeujc uiacnu ienui
              </p>
            </div>
            <div class="h-60 w-96 rounded-lg bg-web-pure p-5 drop-shadow-lg">
              <div class="pb-2 pt-5 text-center text-base font-extrabold text-web-dark">
                Mudah
              </div>
              <p class="text-center font-normal">
                Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj
                KCnhjabehjknachjikn aeujc uiacnu ienui
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="p-20">
          <h1 class="text-center text-7xl font-extrabold text-web-dark">
            Tim Kami
          </h1>
        </div>
        <div class="mx-44 flex flex-wrap justify-center gap-14">
          <div class="h-web-30 w-96 rounded-lg bg-web-pure shadow-xl">
            <img src={Indra} alt="Javier" class="h-96 w-96 rounded-t-lg" />
            <h2 class="pt-6 text-center text-lg font-semibold text-web-dark">
              Gede Indra Adi Brata
            </h2>
            <h2 class="pt-2 text-center text-base font-semibold text-gray-500">
              Direktur Jenderal
            </h2>
          </div>
          <div class="h-web-30 w-96 rounded-lg bg-web-pure shadow-xl">
            <img src={Javier} alt="Javier" class="h-96 w-96 rounded-t-lg" />
            <h2 class="pt-6 text-center text-lg font-semibold text-web-dark">
              Javier Aahmes Reansyah
            </h2>
            <h2 class="pt-2 text-center text-base font-semibold text-gray-500">
              Direktur Front End
            </h2>
          </div>
          <div class="h-web-30 w-96 rounded-lg bg-web-pure shadow-xl">
            <img src={Haikal} alt="Javier" class="h-96 w-96 rounded-t-lg" />
            <h2 class="pt-6 text-center text-lg font-semibold text-web-dark">
              Haikal Thoriq Athaya
            </h2>
            <h2 class="pt-2 text-center text-base font-semibold text-gray-500">
              Direktur Back End
            </h2>
          </div>
          <div class="h-web-30 w-96 rounded-lg bg-web-pure shadow-xl">
            <img src={Fauzi} alt="Javier" class="h-96 w-96 rounded-t-lg" />
            <h2 class="pt-6 text-center text-lg font-semibold text-web-dark">
              Achmad Fauzi Aranda
            </h2>
            <h2 class="pt-2 text-center text-base font-semibold text-gray-500">
              Direktur Kreatif
            </h2>
          </div>
          <div class="h-web-30 w-96 rounded-lg bg-web-pure shadow-xl">
            <img src={Herdi} alt="Javier" class="h-96 w-96 rounded-t-lg" />
            <h2 class="pt-6 text-center text-lg font-semibold text-web-dark">
              Muhammad Herdi Adam
            </h2>
            <h2 class="pt-2 text-center text-base font-semibold text-gray-500">
              Direktur Humas
            </h2>
          </div>
        </div>
        <div class="h-96"></div>
      </div>
    </div>
  );
};

export default Heros;
