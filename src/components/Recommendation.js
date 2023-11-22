import List from "./List";

const listOlahraga = List.olahragaList;
const listMakanan = List.makananList;

console.log(listOlahraga);
console.log(listMakanan);

console.log(listOlahraga[0]);
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
        rec.push(
          "Anda bisa memakan apa saja asal semua makanan yang Anda makan memiliki nutrisi dan gizi yang baik.",
        );
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(
          "Anda bisa memakan apa saja asal semua makanan yang Anda makan memiliki nutrisi dan gizi yang baik.",
        );
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(
          "Anda bisa memakan apa saja asal semua makanan yang Anda makan memiliki nutrisi dan gizi yang baik.",
        );
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
  }
  if (percentage < 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
  }
  if (percentage >= 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return rec;
      }
    }
  }
};

const polaHidupFn = (age, weight, height, percentage) => {
  const bmi = bmiFn(weight, height);
  const ageCategory = ageCategoryFn(age);
  if (percentage < 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        return "Melibatkan kombinasi antara pola makan seimbang dengan porsi yang tepat, aktivitas fisik yang teratur, dan pemantauan gula darah secara rutin. Anak perlu mengonsumsi makanan rendah gula dan karbohidrat sederhana, serta tinggi serat dan protein. Pilihan makanan sebaiknya melibatkan berbagai jenis buah, sayuran, dan sumber protein sehat. Selain itu, aktivitas fisik yang disesuaikan dengan usia harus diperhatikan untuk membantu menjaga berat badan dan mengelola kadar gula darah. Pemantauan secara rutin oleh dokter dan edukasi keluarga tentang manajemen diabetes juga penting untuk mendukung kesehatan anak.";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "Melibatkan kombinasi antara pola makan seimbang dengan fokus pada karbohidrat kompleks, protein, dan lemak sehat. Aktivitas fisik yang teratur juga diperlukan untuk menjaga kesehatan tubuh dan mengelola kadar gula darah. Penting untuk memonitor gula darah secara teratur, menjaga berat badan ideal, dan menghindari makanan tinggi gula. Konsultasi rutin dengan profesional kesehatan, termasuk dokter dan ahli gizi, dapat membantu merancang rencana pengelolaan diabetes yang efektif sesuai dengan kebutuhan individu.";
      }
      if (ageCategory === "adult") {
        return "Melibatkan kombinasi antara pola makan seimbang dengan porsi yang terkontrol, aktivitas fisik teratur, dan manajemen stres. Prioritas dalam konsumsi makanan rendah gula, tinggi serat, dan seimbang antara protein, lemak sehat, dan karbohidrat kompleks sangat penting. Olahraga yang sesuai dengan kondisi kesehatan perlu diintegrasikan dalam rutinitas harian, seperti berjalan kaki atau berenang. Pemantauan gula darah secara teratur dan konsultasi dengan tim kesehatan, termasuk dokter dan ahli gizi, dapat membantu dalam merancang rencana manajemen yang efektif. Selain itu, manajemen stres melalui teknik relaksasi seperti meditasi atau yoga dapat mendukung kesehatan secara keseluruhan.";
      }
      if (ageCategory === "elder") {
        return "Porsi makan sebaiknya disesuaikan dengan kebutuhan individu. Aktivitas fisik ringan seperti jalan kaki atau senam dapat membantu menjaga kesehatan jantung dan mengelola kadar gula darah. Monitoring gula darah secara teratur dan konsultasi dengan dokter untuk penyesuaian rencana perawatan sangat penting. Pemeliharaan berat badan yang sehat dan pencegahan cedera juga perlu diperhatikan. Manajemen stres melalui kegiatan seperti meditasi atau bersosialisasi dengan teman-teman juga dapat memberikan dampak positif pada kesejahteraan lansia dengan diabetes.";
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        return "Anak perlu mengonsumsi makanan rendah gula dan lemak, serta tinggi serat, buah, sayuran, dan protein sehat. Porsi makan perlu diatur agar sesuai dengan kebutuhan tubuh. Aktivitas fisik yang teratur, seperti bermain di luar atau berpartisipasi dalam olahraga ringan, penting untuk membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Pemantauan gula darah secara rutin dan konsultasi dengan tim kesehatan, termasuk dokter dan ahli gizi, dapat membantu mengelola diabetes dengan efektif pada usia dini. Peran keluarga dalam mendukung pola hidup sehat ini juga sangat penting.";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "Memilih makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, serta fokus pada buah, sayuran, protein sehat, dan serat. Porsi makan harus diatur agar sesuai dengan kebutuhan tubuh. Aktivitas fisik teratur, seperti olahraga aerobik atau kegiatan fisik lainnya, diperlukan untuk membantu mengelola berat badan dan meningkatkan kontrol gula darah. Monitoring gula darah secara teratur dan konsultasi dengan profesional kesehatan dapat membantu merancang rencana manajemen diabetes yang efektif. Selain itu, membangun dukungan sosial dan pemahaman tentang pentingnya manajemen diabetes di kalangan teman dan keluarga juga merupakan faktor kunci dalam mencapai gaya hidup sehat.";
      }
      if (ageCategory === "adult") {
        return " Prioritas utama adalah konsumsi makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, dengan penekanan pada buah, sayuran, protein sehat, dan serat. Porsi makan perlu diatur agar sesuai dengan kebutuhan tubuh. Aktivitas fisik yang teratur, seperti berjalan kaki, bersepeda, atau latihan aerobik, membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan tim kesehatan, termasuk ahli gizi, membantu merancang rencana manajemen diabetes yang efektif. Manajemen stres dan aspek psikososial lainnya juga perlu diperhatikan untuk mendukung kesejahteraan secara keseluruhan.";
      }
      if (ageCategory === "elder") {
        return "Penekanan pada pola makan seimbang dengan mengurangi konsumsi gula, lemak jenuh, dan karbohidrat sederhana. Porsi makan perlu diatur sesuai dengan kebutuhan tubuh. Aktivitas fisik ringan, seperti berjalan atau senam, harus diintegrasikan ke dalam rutinitas harian untuk membantu mengelola berat badan dan meningkatkan kontrol gula darah. Monitoring gula darah secara rutin dan konsultasi dengan dokter dan ahli gizi membantu merancang rencana manajemen diabetes yang tepat. Perawatan kesehatan mental juga penting, termasuk manajemen stres dan perhatian terhadap kesejahteraan psikososial. Keseluruhan, mendukung gaya hidup sehat ini dapat meningkatkan kualitas hidup lansia dengan diabetes.";
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        return "Anak perlu mengonsumsi makanan rendah gula dan lemak, serta tinggi serat, buah, sayuran, dan protein sehat. Porsi makan perlu diatur agar sesuai dengan kebutuhan tubuh. Aktivitas fisik yang teratur, seperti bermain di luar atau berpartisipasi dalam olahraga ringan, penting untuk membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Pemantauan gula darah secara rutin dan konsultasi dengan tim kesehatan, termasuk dokter dan ahli gizi, dapat membantu mengelola diabetes dengan efektif pada usia dini. Peran keluarga dalam mendukung pola hidup sehat ini juga sangat penting.";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "Memilih makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, serta fokus pada buah, sayuran, protein sehat, dan serat. Porsi makan harus diatur agar sesuai dengan kebutuhan tubuh. Aktivitas fisik teratur, seperti olahraga aerobik atau kegiatan fisik lainnya, diperlukan untuk membantu mengelola berat badan dan meningkatkan kontrol gula darah. Monitoring gula darah secara teratur dan konsultasi dengan profesional kesehatan dapat membantu merancang rencana manajemen diabetes yang efektif. Selain itu, membangun dukungan sosial dan pemahaman tentang pentingnya manajemen diabetes di kalangan teman dan keluarga juga merupakan faktor kunci dalam mencapai gaya hidup sehat.";
      }
      if (ageCategory === "adult") {
        return " Prioritas utama adalah konsumsi makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, dengan penekanan pada buah, sayuran, protein sehat, dan serat. Porsi makan perlu diatur agar sesuai dengan kebutuhan tubuh. Aktivitas fisik yang teratur, seperti berjalan kaki, bersepeda, atau latihan aerobik, membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan tim kesehatan, termasuk ahli gizi, membantu merancang rencana manajemen diabetes yang efektif. Manajemen stres dan aspek psikososial lainnya juga perlu diperhatikan untuk mendukung kesejahteraan secara keseluruhan.";
      }
      if (ageCategory === "elder") {
        return "Penekanan pada pola makan seimbang dengan mengurangi konsumsi gula, lemak jenuh, dan karbohidrat sederhana. Porsi makan perlu diatur sesuai dengan kebutuhan tubuh. Aktivitas fisik ringan, seperti berjalan atau senam, harus diintegrasikan ke dalam rutinitas harian untuk membantu mengelola berat badan dan meningkatkan kontrol gula darah. Monitoring gula darah secara rutin dan konsultasi dengan dokter dan ahli gizi membantu merancang rencana manajemen diabetes yang tepat. Perawatan kesehatan mental juga penting, termasuk manajemen stres dan perhatian terhadap kesejahteraan psikososial. Keseluruhan, mendukung gaya hidup sehat ini dapat meningkatkan kualitas hidup lansia dengan diabetes.";
      }
    }
  }
  if (percentage >= 70) {
    if (bmi === "underweight" || bmi === "normal") {
      if (ageCategory === "child") {
        return "Melibatkan pendekatan yang hati-hati terhadap pola makan dan manajemen gula darah. Anak perlu mengonsumsi makanan dengan indeks glikemik rendah, tinggi serat, dan nutrisi esensial untuk mendukung pertumbuhan. Porsi makan perlu ditingkatkan secara bertahap, dengan fokus pada makanan sehat seperti buah, sayuran, dan protein. Konsultasi dengan dokter dan ahli gizi penting untuk merancang rencana makan yang sesuai. Aktivitas fisik yang sesuai dengan usia, seperti bermain di luar atau berpartisipasi dalam kegiatan fisik, dapat membantu meningkatkan nafsu makan dan meningkatkan kesehatan secara keseluruhan. Pemantauan gula darah secara rutin dan dukungan keluarga dalam mengelola diabetes juga sangat krusial untuk kesejahteraan anak.";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "Mencakup penyesuaian pola makan dan gaya hidup. Prioritas utama adalah mengonsumsi makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, dengan penekanan pada buah, sayuran, dan protein sehat. Porsi makan perlu ditingkatkan secara bertahap untuk mencapai berat badan yang sehat. Aktivitas fisik yang teratur, seperti olahraga ringan atau kegiatan fisik lainnya, dapat membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan profesional kesehatan, termasuk ahli gizi, penting untuk merancang rencana manajemen diabetes yang efektif. Dukungan sosial dan psikologis dari keluarga dan teman juga merupakan faktor penting dalam mendukung perubahan gaya hidup yang positif.";
      }
      if (ageCategory === "adult") {
        return "Melibatkan penyesuaian pola makan dan gaya hidup. Fokus utama adalah mengonsumsi makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, dengan penekanan pada buah, sayuran, dan protein sehat. Porsi makan perlu ditingkatkan secara bertahap untuk mencapai berat badan yang sehat. Aktivitas fisik teratur, seperti latihan aerobik dan kegiatan fisik lainnya, membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan tim kesehatan, termasuk ahli gizi, mendukung rencana manajemen diabetes yang efektif. Manajemen stres dan dukungan sosial juga penting untuk kesejahteraan secara keseluruhan.";
      }
      if (ageCategory === "elder") {
        return "Melibatkan penyesuaian pola makan dengan mengonsumsi makanan rendah gula, lemak jenuh, dan karbohidrat sederhana. Porsi makan perlu ditingkatkan untuk mencapai berat badan yang sehat. Aktivitas fisik yang ringan, seperti berjalan atau senam, dapat membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan dokter dan ahli gizi mendukung rencana manajemen diabetes yang efektif. Dukungan sosial dari keluarga dan teman serta perhatian terhadap aspek kesehatan mental juga menjadi bagian penting dari gaya hidup sehat pada usia lanjut.";
      }
    }
    if (bmi === "overweight" || bmi === "obese") {
      if (ageCategory === "child") {
        return "Melibatkan perubahan pada pola makan dan gaya hidup. Anak perlu mengonsumsi makanan rendah gula, lemak jenuh, dan karbohidrat sederhana, dengan fokus pada buah, sayuran, dan protein sehat. Porsi makan harus diatur agar sesuai dengan kebutuhan tubuh dan membantu mengelola berat badan. Aktivitas fisik yang teratur, seperti bermain di luar atau berpartisipasi dalam olahraga, penting untuk mendukung kesehatan dan mengendalikan kadar gula darah. Dukungan keluarga dalam menciptakan lingkungan yang sehat dan pemahaman mengenai manajemen diabetes anak sangat krusial untuk mencapai gaya hidup sehat.";
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        return "Melibatkan perubahan pola makan dengan menghindari makanan tinggi gula, lemak jenuh, dan karbohidrat sederhana. Porsi makan perlu diatur agar sesuai dengan kebutuhan tubuh dan membantu menurunkan berat badan. Aktivitas fisik yang teratur, seperti olahraga atau kegiatan fisik lainnya, penting untuk mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan tim kesehatan, termasuk ahli gizi, mendukung rencana manajemen diabetes yang efektif. Dukungan sosial dan pemahaman mengenai pentingnya perubahan gaya hidup juga berperan penting dalam mencapai kesejahteraan secara keseluruhan.";
      }
      if (ageCategory === "adult") {
        return "Mencakup penyesuaian pola makan dengan fokus pada makanan rendah gula, lemak jenuh, dan karbohidrat sederhana. Kontrol porsi makan perlu diperhatikan untuk mengelola berat badan. Aktivitas fisik teratur, seperti olahraga atau kegiatan fisik lainnya, membantu meningkatkan sensitivitas insulin dan kesehatan secara keseluruhan. Monitoring gula darah secara rutin, konsultasi dengan tim kesehatan, dan dukungan psikososial dapat membantu dalam merancang rencana manajemen diabetes yang efektif. Prioritaskan gaya hidup seimbang untuk meningkatkan kesejahteraan dan mengontrol penyakit.";
      }
      if (ageCategory === "elder") {
        return "Melibatkan penyesuaian pola makan dengan fokus pada makanan rendah gula, lemak jenuh, dan karbohidrat sederhana. Porsi makan perlu diatur agar sesuai dengan kebutuhan tubuh dan mencapai berat badan yang sehat. Aktivitas fisik yang teratur, seperti berjalan atau senam, membantu mengelola berat badan dan meningkatkan sensitivitas insulin. Monitoring gula darah secara rutin dan konsultasi dengan dokter serta ahli gizi mendukung rencana manajemen diabetes yang efektif. Manajemen stres dan dukungan sosial juga penting untuk kesejahteraan holistik lansia dengan diabetes dan masalah berat badan.";
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
    // textMakanan: fn()
    olahraga: olahragaFn(data.Age, data.Weight, data.Height, data.Percentage),
    makanan: makananFn(data.Age, data.Weight, data.Height, data.Percentage),
    polaHidup: polaHidupFn(data.Age, data.Weight, data.Height, data.Percentage),
  };
};
