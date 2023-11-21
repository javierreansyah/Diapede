const olahragaList = [
  { name: "Jalan Kaki", text: "Jalan kaki bermanfaat xxxxx", img: "gambar" },
];

const resultFn = (percentage) => {
  if (percentage < 20) {
    return {
      category: "Risiko Diabetes Rendah",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  } else if (percentage < 50) {
    return {
      category: "Risiko Diabetes Sedang",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  } else if (percentage < 70) {
    return {
      category: "Risiko Diabetes Tinggi",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  } else {
    return {
      category: "Risiko Diabetes Sangat Tinggi",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  }
};
const olahragaFn = (age, weight, height, percentage) => {
  const bmi = bmi(weight, height);
  const ageCategory = ageCategory(age);
  if (bmi === "undeweight") {
    if (ageCategory === "child") {
      const rec = [];
      rec.push("jalan");
      rec.push("renang");
      return rec;
    }
    if (ageCategory === "teen") {
    }
  }
};
const makananFn = (age, weight, height, percentage) => {};
const polaHidupFn = (age, weight, height, percentage) => {};

const ageCategory = (age) => {
  if (age < 11) return "child";
  if (age < 18) return "teen";
  if (age < 30) return "young adult";
  if (age < 60) return "adult";
  return "elder";
};

const bmi = (weight, height) => {
  const bmiCalculation = weight / ((height / 100) * (height / 100));
  if (bmiCalculation < 18.5) return "underweight";
  if (bmiCalculation < 25) return "normal";
  if (bmiCalculation < 30) return "overweight";
  return "obese";
};

export const Recommendation = (data) => {
  return {
    summary: resultFn(data.Percentage),
    olahraga: olahragaFn(data.Age, data.Weight, data.Height, data.Percentage),
    makanan: makananFn(data.Age, data.Weight, data.Height, data.Percentage),
    polaHidup: polaHidupFn(data.Age, data.Weight, data.Height, data.Percentage),
  };
};
