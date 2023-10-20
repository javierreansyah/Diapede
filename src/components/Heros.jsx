import React from 'react'
import Javier from '../assets/images/javier.jpg'
import Fauzi from '../assets/images/fauzi.jpg'
import Herdi from '../assets/images/herdi.jpg'
import Haikal from '../assets/images/haikal.jpg'
import Indra from '../assets/images/kucing.jpg'

const Heros = () => {
  return (
    <div class='bg-web-white'>
      <div class='bg-hero bg-cover bg-center bg-no-repeat w-full h-web-screen relative'>
        <div class="mx-44 pt-80 pb-60">
          <div>
            <h1 class='left font-extrabold text-7xl text-web-dark'>
              Diagnosis Dini
            </h1>
            <h1 class='left font-extrabold text-7xl text-web-dark'>
              Diabetes
            </h1>
            <p class='my-5 left font-normal text-base text-web-dark'>
              Segera cek sekarang
            </p>
            <a href='' class='p-3 font-semibold rounded-lg bg-web-cyan text-web-pure hover:text-gray-100 text-base shadow-sm'>
              Cek Sekarang
            </a>
          </div>
        </div>
        <div class=''>
          <div class="mx-44 flex gap-14 justify-center">
            <div class='h-60 w-96 bg-web-pure rounded-lg drop-shadow-lg p-5 '>
              <div class='text-center font-extrabold text-base text-web-dark pt-5 pb-2'>
                Gratis
              </div>
              <p class='text-center font-normal'>
                Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj KCnhjabehjknachjikn aeujc uiacnu ienui
              </p>
            </div>
            <div class='h-60 w-96 bg-web-pure rounded-lg drop-shadow-lg p-5'>
              <div class='text-center font-extrabold text-base text-web-dark pt-5 pb-2'>
                Cepat
              </div>
              <p class='text-center font-normal'>
                Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj KCnhjabehjknachjikn aeujc uiacnu ienui
              </p>
            </div>
            <div class='h-60 w-96 bg-web-pure rounded-lg drop-shadow-lg p-5'>
              <div class='text-center font-extrabold text-base text-web-dark pt-5 pb-2'>
                Mudah
              </div>
              <p class='text-center font-normal'>
                Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj KCnhjabehjknachjikn aeujc uiacnu ienui
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class='p-20'>
          <h1 class='font-extrabold text-7xl text-web-dark text-center'>
            Tim Kami
          </h1>
        </div>
        <div class='mx-44 flex flex-wrap gap-14 justify-center'>
          <div class='h-web-30 w-96 bg-web-pure rounded-lg shadow-xl'>
            <img src={Indra} alt="Javier" class='h-96 w-96 rounded-t-lg'/>
            <h2 class='font-semibold text-lg text-web-dark pt-6 text-center'>
              Gede Indra Adi Brata
            </h2>
            <h2 class='font-semibold text-base text-gray-500 pt-2 text-center'>
              Direktur Jenderal
            </h2>
          </div>
          <div class='h-web-30 w-96 bg-web-pure rounded-lg shadow-xl'>
            <img src={Javier} alt="Javier" class='h-96 w-96 rounded-t-lg'/>
            <h2 class='font-semibold text-lg text-web-dark pt-6 text-center'>
              Javier Aahmes Reansyah
            </h2>
            <h2 class='font-semibold text-base text-gray-500 pt-2 text-center'>
              Direktur Front End
            </h2>
          </div>
          <div class='h-web-30 w-96 bg-web-pure rounded-lg shadow-xl'>
            <img src={Haikal} alt="Javier" class='h-96 w-96 rounded-t-lg'/>
            <h2 class='font-semibold text-lg text-web-dark pt-6 text-center'>
              Haikal Thoriq Athaya
            </h2>
            <h2 class='font-semibold text-base text-gray-500 pt-2 text-center'>
              Direktur Back End
            </h2>
          </div>
          <div class='h-web-30 w-96 bg-web-pure rounded-lg shadow-xl'>
            <img src={Fauzi} alt="Javier" class='h-96 w-96 rounded-t-lg'/>
            <h2 class='font-semibold text-lg text-web-dark pt-6 text-center'>
              Achmad Fauzi Aranda
            </h2>
            <h2 class='font-semibold text-base text-gray-500 pt-2 text-center'>
              Direktur Kreatif
            </h2>
          </div>
          <div class='h-web-30 w-96 bg-web-pure rounded-lg shadow-xl'>
            <img src={Herdi} alt="Javier" class='h-96 w-96 rounded-t-lg'/>
            <h2 class='font-semibold text-lg text-web-dark pt-6 text-center'>
              Muhammad Herdi Adam
            </h2>
            <h2 class='font-semibold text-base text-gray-500 pt-2 text-center'>
              Direktur Humas
            </h2>
          </div>
        </div>
        <div class='h-96'></div>
      </div>
    </div>
  )
}

export default Heros