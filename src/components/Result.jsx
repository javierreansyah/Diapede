import React, { useState } from "react";
import { Recommendation } from "./Recommendation";

const Result = ({ response }) => {
  const percentage = response.Percentage;
  const recommendation = Recommendation(response);
  const ageCategoryFn = (age) => {
    if (age < 11) return { category: "Anak-Anak", value: age };
    if (age < 18) return { category: "Remaja", value: age };
    if (age < 40) return { category: "Dewasa", value: age };
    if (age < 60) return { category: "Paruh Baya", value: age };
    return { category: "Lansia", value: age };
  };

  const bmiFn = (weight, height) => {
    const bmiCalculation = weight / ((height / 100) * (height / 100));
    const roundedBmi = Math.round(bmiCalculation);
    if (bmiCalculation < 18.5) return { category: "Kurus", value: roundedBmi };
    if (bmiCalculation < 25) return { category: "Normal", value: roundedBmi };
    if (bmiCalculation < 30) return { category: "Gemuk", value: roundedBmi };
    return { category: "Obesitas", value: roundedBmi };
  };
  const glucoseFn = (glucose) => {
    let cat = "normal";
    if (glucose < 70) cat = "Glukosa Rendah";
    else if (glucose < 140) cat = "Normal";
    else if (glucose < 200) cat = "Tinggi";
    else cat = "Diabetes";
    return { category: cat, value: glucose };
  };
  const preassureFn = (BloodPressure) => {
    let cat = "normal";
    if (BloodPressure < 60) cat = "Rendah";
    else if (BloodPressure < 90) cat = "Normal";
    else if (BloodPressure < 100) cat = "Hipertensi Level 1";
    else if (BloodPressure < 120) cat = "Hipertensi Level 2";
    else cat = "Krisis Hipertensi";
    return { category: cat, value: BloodPressure };
  };
  const ageData = ageCategoryFn(response.Age);
  const bmiData = bmiFn(response.Weight, response.Height);
  const glucoseData = glucoseFn(response.Glucose);
  const preassureData = preassureFn(response.BloodPressure);
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-2 rounded-xl bg-web-pure px-4 pb-4 pt-10 shadow-lg">
          <h2 className="text-center text-4xl font-bold text-web-cyan">
            {ageData.value} tahun
          </h2>
          <p className="pb-4 text-center text-lg font-medium">
            {ageData.category}
          </p>
          <hr className="border-t border-gray-100" />
          <p className="text-center font-medium text-gray-400">Umur</p>
        </div>
        <div className="space-y-2 rounded-xl bg-web-pure px-4 pb-4 pt-10 shadow-lg">
          <h2 className="text-center text-4xl font-bold text-web-cyan">
            {bmiData.value}
          </h2>
          <p className="pb-4 text-center text-lg font-medium">
            {bmiData.category}
          </p>
          <hr className="border-t border-gray-100" />
          <p className="text-center font-medium text-gray-400">BMI</p>
        </div>
        <div className="space-y-2 rounded-xl bg-web-pure px-4 pb-4 pt-10 shadow-lg">
          <h2 className="text-center text-4xl font-bold text-web-cyan">
            {glucoseData.value} mg/dL
          </h2>
          <p className="pb-4 text-center text-lg font-medium">
            {glucoseData.category}
          </p>
          <hr className="border-t border-gray-100" />
          <p className="text-center font-medium text-gray-400">Glukosa</p>
        </div>
        <div className="space-y-2 rounded-xl bg-web-pure px-4 pb-4 pt-10 shadow-lg">
          <h2 className="text-center text-4xl font-bold text-web-cyan">
            {preassureData.value} mm Hg
          </h2>
          <p className="pb-4 text-center text-lg font-medium">
            {preassureData.category}
          </p>
          <hr className="border-t border-gray-100" />
          <p className="text-center font-medium text-gray-400">Tekanan Darah</p>
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
      <p className="w-full xl:w-1/2">{recommendation.polaHidup}</p>
    </div>
  );
};

export default Result;
