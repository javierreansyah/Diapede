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
  const bmi = bmiFn(weight, height);
  const rec = [];
  const ageCategory = ageCategoryFn(age);
  if (percentage < 50) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push("bocil");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
  }
  if (percentage < 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push("bocil");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
  }
  if (percentage >= 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push("bocil");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
  }
};
const makananFn = (age, weight, height, percentage) => {
  const bmi = bmiFn(weight, height);
  const rec = [];
  const ageCategory = ageCategoryFn(age);
  if (percentage < 50) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("makanan rendah gula");
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap makanan rendah gula");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("makanan rendah gula kubur");
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push("makanan rendah gula");
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("makanan rendah gula");
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("makanan rendah gula");
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push("makanan rendah gula");
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("makanan rendah gula");
        rec.push("makanan rendah gula");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("makanan rendah gula kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali makanan rendah gula");
        return rec;
      }
    }
  }
  if (percentage < 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push("makanan rendah gula");
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
  }
  if (percentage >= 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push("makanan rendah gula");
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push("renang");
        rec.push("bersepeda");
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push("jalan");
        rec.push("renang");
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push("balap kuda");
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push("gali kubur");
        return rec;
      }
    }
  }
};

const polaHidupFn = (age, weight, height, percentage) => {
  const bmi = bmiFn(weight, height);
  const ageCategory = ageCategoryFn(age);
  if (percentage < 50) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
  }
  if (percentage < 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
  }
  if (percentage >= 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "adult") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
      if (ageCategory === "elder") {
        return "xxxxxxxxxxxxxxxxxxxxxxxx";
      }
    }
  }
};

const ageCategoryFn = (age) => {
  if (age < 11) return "child";
  if (age < 18) return "teen";
  if (age < 30) return "young adult";
  if (age < 60) return "adult";
  return "elder";
};

const bmiFn = (weight, height) => {
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
