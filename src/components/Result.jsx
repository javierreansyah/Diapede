import React, { useState } from "react";

const Result = ({ response }) => {
  const percentage = response.percentage;
  return (
    <div className="container min-h-screen space-y-8 py-10 xl:py-24">
      <div className="w-full rounded-lg bg-web-pure shadow-xl xl:flex xl:h-[500px]">
        <div className="flex h-full items-center justify-center rounded-l-lg bg-web-white p-8 xl:w-2/5">
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
          <h1 className="text-4xl font-extrabold">Anda Berisiko Tinggi</h1>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            sapiente pariatur quo exercitationem quia, tempora consequuntur. Ex
            veniam incidunt quam odit repellendus. Iusto deleniti exercitationem
            optio, at amet et totam!
          </p>
        </div>
      </div>
      <h1 className="pt-4 text-5xl font-extrabold">Rekomendasi</h1>
      <div className="w-full rounded-lg bg-web-pure shadow-xl xl:flex xl:h-[500px]"></div>
    </div>
  );
};

export default Result;
