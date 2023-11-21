import list from "./List";
const listOlahraga = list;
const resultFn = (percentage) => {
  const paragraph = [];
  if (percentage < 20) {
    paragraph.push(
      "Langkah-langkah untuk menjaga kesehatan Anda dapat difokuskan pada gaya hidup sehat secara umum. Pertama, penting untuk mempertahankan pola makan seimbang dengan memasukkan berbagai jenis makanan yang kaya nutrisi seperti buah-buahan, sayuran, protein berkualitas, dan biji-bijian utuh. Selain itu, rutin berolahraga dapat membantu menjaga berat badan yang sehat dan meningkatkan sensitivitas insulin. ",
    );
    paragraph.push(
      "Pemeriksaan kesehatan rutin juga dianjurkan untuk memantau parameter kesehatan seperti tekanan darah, kolesterol, dan gula darah. Jaga kestabilan tekanan darah dan tingkat kolesterol dengan menghindari kebiasaan merokok dan membatasi konsumsi alkohol. Selain itu, perhatikan tingkat stres dan pastikan Anda mendapatkan cukup tidur. Ini semua adalah langkah-langkah positif untuk menjaga kesehatan secara menyeluruh dan mengurangi risiko pengembangan diabetes.",
    );
    return {
      category: "Risiko Diabetes Rendah",
      text: paragraph,
    };
  } else if (percentage < 50) {
    paragraph.push(
      "Fokuskan pada perubahan gaya hidup yang sehat, seperti mengadopsi pola makan yang seimbang dengan memilih makanan rendah gula dan karbohidrat kompleks, serta mengontrol porsi makan. Rutin berolahraga dapat membantu meningkatkan sensitivitas insulin dan mengelola berat badan. Pastikan untuk menjaga tekanan darah dan kadar kolesterol dalam rentang normal dengan mengurangi konsumsi garam dan lemak jenuh, serta memantau secara rutin. ",
    );
    paragraph.push(
      "Selain itu, periksakan secara teratur gula darah Anda untuk memantau perkembangan kondisi kesehatan. Hindari kebiasaan merokok dan batasi konsumsi alkohol. Manajemen stres dan cukup tidur juga berperan penting dalam menjaga keseimbangan gula darah. Dengan konsistensi dalam menerapkan langkah-langkah ini, Anda dapat mengurangi risiko perkembangan diabetes dan meningkatkan kesehatan secara keseluruhan. Konsultasikan dengan profesional kesehatan untuk rencana yang lebih spesifik sesuai kebutuhan individu Anda.",
    );
    return {
      category: "Risiko Diabetes Sedang",
      text: paragraph,
    };
  } else if (percentage < 70) {
    paragraph.push(
      "Tindakan pencegahan yang lebih intensif diperlukan untuk mengelola dan mengurangi risiko tersebut. Pertama-tama, konsultasikan dengan profesional kesehatan untuk merencanakan strategi pencegahan yang sesuai dengan kondisi Anda. Fokuskan pada perubahan gaya hidup, termasuk mengadopsi pola makan yang sehat dengan membatasi asupan gula dan karbohidrat sederhana, serta memilih makanan tinggi serat. Rutin berolahraga adalah kunci untuk meningkatkan sensitivitas insulin, mengontrol berat badan, dan memperbaiki metabolisme glukosa. Pemantauan teratur gula darah dan pemeriksaan kesehatan menyeluruh sangat penting. ",
    );
    paragraph.push(
      "Selain itu, hentikan kebiasaan merokok jika Anda merokok dan batasi konsumsi alkohol. Manajemen stres dan cukup tidur juga menjadi faktor kunci dalam mengelola risiko diabetes. Dalam beberapa kasus, profesional kesehatan mungkin meresepkan obat atau terapi tertentu, tergantung pada evaluasi risiko Anda secara menyeluruh. Konsistensi dalam menerapkan langkah-langkah ini dapat membantu mengurangi risiko perkembangan diabetes dan meningkatkan kesehatan secara keseluruhan.",
    );
    return {
      category: "Risiko Diabetes Tinggi",
      text: paragraph,
    };
  } else {
    paragraph.push(
      "Langkah-langkah pencegahan yang intensif dan komprehensif menjadi kunci untuk mengelola kondisi ini. Pertama-tama, segera berkonsultasi dengan profesional kesehatan untuk mendapatkan panduan dan rencana perawatan yang spesifik sesuai dengan kondisi Anda. Pemantauan gula darah secara teratur sangat penting, dan mungkin diperlukan perubahan dramatis dalam gaya hidup Anda. Fokus pada pola makan yang sangat sehat dengan membatasi konsumsi gula, karbohidrat sederhana, dan lemak jenuh. Rutin berolahraga dengan intensitas yang sesuai dengan kondisi kesehatan Anda dapat membantu mengontrol berat badan, meningkatkan sensitivitas insulin, dan mengurangi risiko diabetes. Hentikan kebiasaan merokok segera, karena merokok dapat memperburuk risiko diabetes. ",
    );
    paragraph.push(
      "Manajemen stres secara efektif dan asupan tidur yang cukup juga penting untuk kesehatan Anda secara keseluruhan. Dalam beberapa kasus, terapi obat atau intervensi medis mungkin diperlukan, dan kepatuhan terhadap saran profesional adalah kunci untuk mengelola risiko diabetes dengan efektif. Perubahan gaya hidup yang radikal dan konsisten dapat membantu mengurangi risiko yang sangat tinggi untuk diabetes dan meningkatkan kualitas hidup Anda.",
    );
    return {
      category: "Risiko Diabetes Sangat Tinggi",
      text: paragraph,
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
        rec.push(listOlahraga[0]);
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[0]);
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        rec.push(listOlahraga[6]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[6]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        return rec;
      }
    }
  }
  if (percentage < 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[0]);
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[0]);
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        rec.push(listOlahraga[6]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
  }
  if (percentage >= 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[0]);
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[0]);
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        rec.push(listOlahraga[6]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
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
  if (age < 40) return "young adult";
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
