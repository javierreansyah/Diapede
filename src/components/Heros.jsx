import React from "react";
import { Link } from "react-router-dom";

import Javier from "../assets/images/javier.jpg";
import Fauzi from "../assets/images/fauzi.jpg";
import Herdi from "../assets/images/herdi.jpg";
import Haikal from "../assets/images/haikal.jpg";
import Indra from "../assets/images/kucing.jpg";

const Heros = () => {
  const members = [
    { name: "Gede Indra Adi Brata", title: "Direktur Jenderal", img: Indra },
    {
      name: "Javier Aahmes Reansyah",
      title: "Direktur Front End",
      img: Javier,
    },
    { name: "Haikal Thoriq Athaya", title: "Direktur Back End", img: Haikal },
    { name: "Achmad Fauzi Aranda", title: "Direktur Kreatif", img: Fauzi },
    { name: "Muhammad Herdi Adams", title: "Direktur Humas", img: Herdi },
  ];

  const homeCards = [
    {
      title: "Gratis",
      text: "Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj KCnhjabehjknachjikn aeujc uiacnu ienui",
    },
    {
      title: "Cepat",
      text: "Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj KCnhjabehjknachjikn aeujc uiacnu ienui",
    },
    {
      title: "Mudah",
      text: "Lorem Lorem oiaeion conaue ncaiunucn icnacnhe jinchjkanhjnbhj KCnhjabehjknachjikn aeujc uiacnu ienui",
    },
  ];
  return (
    <>
      <div className="flex h-[480px] w-full items-center bg-hero bg-cover bg-no-repeat md:h-screen md:bg-center">
        <div className="container">
          <div className="flex h-full w-full items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-web-dark md:text-7xl">
                Deteksi Dini
              </h1>
              <h1 className="text-5xl font-extrabold text-web-dark md:text-7xl">
                Diabetes
              </h1>
              <p className="my-5 text-base font-normal text-web-dark">
                Segera cek sekarang
              </p>

              <Link
                to="/checkup"
                className="rounded-lg bg-web-cyan p-3 text-base font-semibold text-web-pure shadow-sm hover:text-gray-100"
              >
                Cek Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-24">
        <h2 className="mb-12 text-center text-5xl font-extrabold ">
          Kenapa Jembatan Aroma?
        </h2>
        <div className="space-y-6 lg:flex lg:gap-10 lg:space-y-0">
          {homeCards.map((card, index) => (
            <div key={index} className="rounded-xl bg-web-pure p-8 shadow-xl">
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-20">
        <h2 className="mb-12 text-center text-5xl font-extrabold text-web-dark">
          Tim Kami
        </h2>

        <div className="flex flex-wrap justify-center gap-20">
          {members.map((member, index) => (
            <div
              key={index}
              className="h-fit w-[270px] rounded-lg bg-web-pure shadow-xl"
            >
              <img src={member.img} className="rounded-t-lg" />
              <div className="px-4 pb-8 pt-6">
                <h3 className="text-center text-lg font-semibold text-web-dark">
                  {member.name}
                </h3>
                <p className="text-center text-base font-semibold text-gray-500">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Heros;
