import React, { useState } from "react";
import { Recommendation } from "./Recommendation";

const Result = ({ response }) => {
  const percentage = response.Percentage;
  const recommendation = Recommendation(response);
  console.log(recommendation);
  return (
    <div className="container min-h-screen space-y-8 py-10 xl:py-24">
      <div className="w-full overflow-hidden rounded-xl bg-web-pure shadow-xl xl:flex xl:min-h-[500px]">
        <div className="flex items-center justify-center bg-gray-100 p-8 xl:w-2/5">
          <div
            className="radial-progress bg-web-pure text-5xl font-black text-web-cyan shadow-xl"
            style={{
              "--value": percentage,
              "--size": "18rem",
              "--thickness": "2.2rem",
            }}
            role="progressbar"
          >
            {percentage}%
          </div>
        </div>
        <div className="space-y-4 p-12 xl:h-auto xl:w-3/5">
          <h1 className="text-4xl font-extrabold">
            {recommendation.summary.category}
          </h1>
          <div className="space-y-4">
            {recommendation.summary.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <h1 className="pt-4 text-5xl font-extrabold">Rekomendasi</h1>
      <h2 className="text-3xl font-bold">Olahraga</h2>
      <p className="w-full xl:w-1/2">{recommendation.olahraga.text}</p>
      <div className="w-full rounded-lg xl:flex">
        <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2 xl:grid-cols-3">
          {recommendation.olahraga.list.map((sport, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-web-pure shadow-xl"
            >
              <img src={sport.img} />
              <div className="space-y-2 p-4">
                <h2 className="font-bold">{sport.name}</h2>
                <p className="pb-2">{sport.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold">Makanan</h2>
      <p className="w-full xl:w-1/2">{recommendation.makanan.text}</p>
      <div className="w-full rounded-lg xl:flex">
        <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2 xl:grid-cols-3">
          {recommendation.makanan.list.map((food, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-web-pure shadow-xl"
            >
              <img src={food.img} />
              <div className="space-y-2 p-4">
                <h2 className="font-bold">{food.name}</h2>
                <p className="pb-2">{food.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold">Pola Hidup</h2>
      <p className="w-full rounded-xl bg-web-pure p-4 xl:w-1/2">
        {recommendation.polaHidup}
      </p>
    </div>
  );
};

export default Result;
