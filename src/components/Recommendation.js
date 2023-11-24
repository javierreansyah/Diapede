import List from "./List";

const listOlahraga = List.olahragaList;
const listMakanan = List.makananList;
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
        return {
          list: rec,
          text: "Anda direkomendasikan untuk melakukan olahraga aerobik, badminton, berenang, bersepeda, dan jogging. Olahraga ini sangat bermanfaat untuk meningkatkan sirkulasi darah, kesehatan jantung, dan kelincahan Anda, sekaligus membantu pengelolaan gula darah yang efektif.",
        };
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
        return {
          list: rec,
          text: "Anda direkomendasikan untuk melakukan olahraga aerobik, badminton, berenang, bersepeda, jogging, yoga, dan zumba. Kegiatan-kegiatan ini membantu meningkatkan kebugaran kardiovaskular, fleksibilitas, dan ketahanan tubuh. Selain itu, beragam pilihan olahraga ini dapat membantu Anda dalam mengelola kadar gula darah dan menjaga berat badan yang sehat.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return {
          list: rec,
          text: "Anda disarankan untuk melakukan badminton, berenang, bersepeda, yoga, dan zumba. Olahraga-olahraga ini efektif untuk menjaga kesehatan jantung, mengurangi stres, dan meningkatkan keseimbangan serta fleksibilitas tubuh.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Bagi Anda yang berusia lanjut dengan risiko diabetes rendah, sangat disarankan untuk melakukan berenang, bersepeda, yoga, dan zumba. Aktivitas-aktivitas ini ringan namun efektif untuk menjaga kebugaran, fleksibilitas, dan keseimbangan, sekaligus memberikan manfaat pada kesehatan mental dan emosional.",
        };
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Anak-anak yang memiliki berat badan lebih disarankan untuk melakukan badminton, berenang, bersepeda, yoga, dan zumba. Kegiatan-kegiatan ini tidak hanya menyenangkan tetapi juga bermanfaat untuk membantu mereka dalam mengelola berat badan dan meningkatkan kebugaran fisik.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[5]);
        rec.push(listOlahraga[7]);
        rec.push(listOlahraga[8]);
        return {
          list: rec,
          text: "Anda yang berada di usia dewasa, memiliki berat badan lebih, disarankan untuk melakukan berenang, bersepeda, yoga, dan zumba. Olahraga-olahraga ini efektif untuk menurunkan berat badan, meningkatkan kesehatan jantung, serta membantu dalam mengatur kadar gula darah.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Anda direkomendasikan untuk melakukan olahraga badminton, berenang, bersepeda, yoga, dan zumba. Kegiatan-kegiatan ini sangat bermanfaat bagi Anda yang memiliki BMI overweight dan risiko diabetes yang relatif rendah. Badminton, berenang, dan bersepeda adalah olahraga aerobik yang baik untuk meningkatkan kesehatan jantung dan membakar kalori, yang penting dalam manajemen berat badan.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Anda yang berada di usia lanjut, dengan BMI menunjukkan overweight dan risiko diabetes di bawah 50%, disarankan untuk melakukan badminton, berenang, bersepeda, yoga, dan zumba. Olahraga-olahraga ini sangat cocok untuk lansia karena tidak terlalu memberikan tekanan pada sendi, namun efektif untuk meningkatkan sirkulasi darah, fleksibilitas, dan keseimbangan. ",
        };
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk anak-anak yang mengalami obesitas dengan risiko diabetes di bawah 50%, sangat disarankan untuk melakukan yoga dan zumba. Kegiatan-kegiatan ini membantu dalam meningkatkan fleksibilitas, koordinasi, dan keseimbangan, serta memberikan manfaat mental dan emosional yang penting pada usia ini. Yoga dan zumba juga membantu dalam mengembangkan kesadaran tubuh dan kesehatan secara menyenangkan.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[6]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Bagi remaja atau dewasa muda yang memiliki BMI kategori obesitas dan risiko diabetes kurang dari 50%, disarankan untuk melakukan yoga dan zumba. Kedua jenis olahraga ini sangat bermanfaat untuk mengurangi stres, meningkatkan kekuatan otot dan fleksibilitas, serta membantu dalam pengelolaan berat badan yang sehat. Mereka juga memberikan efek relaksasi dan membantu dalam fokus dan konsentrasi.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Dewasa dengan obesitas dan risiko diabetes di bawah 50% dapat mempertimbangkan untuk melakukan yoga dan zumba. Olahraga ini ideal untuk mereka yang membutuhkan aktivitas fisik yang lebih rendah dampaknya tetapi efektif untuk meningkatkan fleksibilitas, kekuatan, dan kesehatan mental. Kedua olahraga ini juga membantu dalam pengelolaan berat badan dan kesehatan jantung",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        return {
          list: rec,
          text: "Lansia dengan kondisi obesitas dan risiko diabetes kurang dari 50% sangat disarankan untuk melakukan yoga. Yoga adalah aktivitas fisik yang lembut dan dapat disesuaikan, sehingga cocok untuk usia lanjut. Yoga membantu dalam mempertahankan fleksibilitas, kekuatan, dan keseimbangan, serta memiliki manfaat besar dalam mengurangi stres dan meningkatkan kesejahteraan mental.",
        };
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
        return {
          list: rec,
          text: "Anak-anak dengan BMI normal atau kurus dan risiko diabetes di bawah 70% disarankan melakukan aerobik, badminton, berenang, bersepeda, dan jogging. Aktivitas-aktivitas ini membantu dalam meningkatkan stamina dan kesehatan jantung, sekaligus menyenangkan dan cocok untuk usia ini",
        };
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
        return {
          list: rec,
          text: "Remaja atau dewasa muda dengan BMI normal atau kurus disarankan melakukan aerobik, badminton, berenang, bersepeda, jogging, yoga, dan zumba. Kegiatan ini membantu dalam membangun kekuatan, stamina, dan fleksibilitas.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Dewasa dengan BMI normal atau kurus disarankan berenang, bersepeda, yoga, dan zumba. Kegiatan ini membantu dalam menjaga keseimbangan, kekuatan, dan kesehatan mental.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Lansia dengan BMI normal atau kurus disarankan melakukan yoga dan zumba. Kegiatan ini membantu dalam mempertahankan fleksibilitas dan keseimbangan.",
        };
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk anak-anak yang overweight, disarankan berenang, bersepeda, yoga, dan zumba. Kegiatan ini membantu dalam mengelola berat badan dan mengembangkan kekuatan serta fleksibilitas, sambil meminimalisir risiko cedera.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Bagi mereka yang overweight, berenang, bersepeda, yoga, dan zumba adalah pilihan ideal. Aktivitas ini membantu dalam penurunan berat badan, meningkatkan kesehatan jantung, dan mengurangi stres",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Dewasa yang overweight disarankan melakukan berenang, bersepeda, yoga, dan zumba. Olahraga ini membantu dalam menurunkan berat badan dan meningkatkan kesehatan kardiovaskular.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk lansia yang overweight, yoga dan zumba adalah pilihan yang bagus. Aktivitas ini ringan dan membantu dalam menjaga keseimbangan serta fleksibilitas.",
        };
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Anak-anak obesitas dengan risiko diabetes di bawah 70% dapat melakukan berenang, bersepeda, yoga, dan zumba. Aktivitas-aktivitas ini aman, efektif untuk meningkatkan kesehatan jantung, dan membantu dalam mengatur berat badan.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Remaja atau dewasa muda obesitas disarankan melakukan berenang, bersepeda, yoga, dan zumba. Aktivitas ini membantu dalam mengurangi beban pada sendi, meningkatkan fleksibilitas, dan mengelola berat badan",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk dewasa obesitas, berenang, bersepeda, yoga, dan zumba sangat disarankan. Kegiatan-kegiatan ini ringan tetapi efektif untuk menjaga kesehatan jantung dan mengelola berat badan.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Lansia obesitas disarankan melakukan yoga. Yoga adalah cara yang aman dan efektif untuk meningkatkan fleksibilitas dan keseimbangan, serta mengurangi stres.",
        };
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
        return {
          list: rec,
          text: "Anak-anak dengan BMI normal atau kurus dan risiko diabetes di atas 70% disarankan melakukan aerobik, badminton, berenang, bersepeda, dan jogging. Kegiatan-kegiatan ini cocok untuk meningkatkan kesehatan jantung dan keseimbangan gula darah, sambil tetap menyenangkan bagi anak-anak.",
        };
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
        return {
          list: rec,
          text: "Remaja atau dewasa muda dengan BMI normal atau kurus dan risiko diabetes di atas 70% disarankan melakukan aerobik, badminton, berenang, bersepeda, jogging, yoga, dan zumba. Olahraga-olahraga ini membantu dalam membangun kekuatan, stamina, dan fleksibilitas, sambil mengelola risiko diabetes.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[1]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Dewasa dengan BMI normal atau kurus dan risiko diabetes di atas 70% disarankan berenang, bersepeda, yoga, dan zumba. Kegiatan ini membantu dalam menjaga keseimbangan, kekuatan, dan kesehatan kardiovaskular.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Lansia dengan BMI normal atau kurus dan risiko diabetes tinggi disarankan melakukan yoga dan zumba. Kegiatan ini membantu dalam mempertahankan fleksibilitas dan keseimbangan, yang penting untuk kesehatan pada usia lanjut.",
        };
      }
    }
    if (bmi === "overweight") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Anak-anak yang overweight disarankan berenang, bersepeda, yoga, dan zumba. Olahraga ini membantu dalam mengatur berat badan dan meningkatkan kesehatan kardiovaskular, yang penting untuk mengelola risiko diabetes.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[2]);
        rec.push(listOlahraga[3]);
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Bagi remaja atau dewasa muda yang overweight, berenang, bersepeda, yoga, dan zumba adalah pilihan yang baik. Kegiatan ini membantu dalam penurunan berat badan dan pengelolaan gula darah, yang penting untuk mengelola risiko diabetes.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Dewasa yang overweight disarankan melakukan berenang, bersepeda, yoga, dan zumba. Kegiatan ini penting untuk mengelola berat badan dan risiko diabetes yang tinggi.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk lansia yang overweight, yoga dan zumba adalah pilihan yang bagus. Kegiatan ini ringan dan membantu dalam menjaga keseimbangan serta kesehatan kardiovaskular.",
        };
      }
    }
    if (bmi === "obese") {
      if (ageCategory === "child") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk anak-anak obesitas dengan risiko diabetes tinggi, berenang, bersepeda, yoga, dan zumba adalah pilihan yang tepat. Kegiatan ini memberikan latihan kardiovaskular yang aman dan efektif untuk mengelola berat badan dan gula darah.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Remaja atau dewasa muda obesitas disarankan melakukan berenang, bersepeda, yoga, dan zumba. Olahraga ini membantu mengurangi risiko komplikasi diabetes dengan memperbaiki kesehatan kardiovaskular dan mengelola berat badan.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Untuk dewasa obesitas dengan risiko diabetes tinggi, berenang, bersepeda, yoga, dan zumba sangat disarankan. Aktivitas ini membantu dalam mengurangi beban pada sendi dan mengelola risiko diabetes.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listOlahraga[4]);
        rec.push(listOlahraga[7]);
        return {
          list: rec,
          text: "Lansia obesitas dengan risiko diabetes tinggi disarankan melakukan yoga. Yoga adalah cara yang aman dan efektif untuk meningkatkan fleksibilitas dan keseimbangan, serta mengurangi stres.",
        };
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
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Dengan persentase resiko diabetes yang rendah, BMI dalam kisaran normal, dan usia masih pada kategori anak-anak, sangat penting untuk mempertahankan pola makan sehat guna mendukung kesehatan dan pertumbuhan Anda. Pastikan untuk mengonsumsi makanan yang kaya akan nutrisi seperti sayuran, buah-buahan, dan sumber protein seimbang. Hindari makanan yang tinggi gula dan lemak jenuh, serta perhatikan porsi makan agar tetap sesuai dengan kebutuhan tubuh dalam fase pertumbuhan. Penting juga untuk tetap aktif secara fisik, sehingga dapat mempertahankan berat badan yang sehat dan meningkatkan kondisi kesehatan secara keseluruhan. Jika memiliki pertanyaan lebih lanjut atau perlu bantuan lebih lanjut terkait pola makan, sebaiknya berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan panduan yang lebih spesifik sesuai dengan kebutuhan Anda.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Dengan persentase resiko diabetes yang rendah, BMI dalam kisaran normal, dan usia remaja, sangat penting untuk tetap memperhatikan pola makan seimbang untuk mendukung kesehatan dan perkembangan tubuh Anda. Pilihlah makanan yang kaya akan nutrisi seperti buah-buahan, sayuran, sumber protein tanpa lemak, dan biji-bijian utuh. Hindari konsumsi makanan tinggi gula dan lemak jenuh, serta pastikan untuk mencukupi kebutuhan cairan dengan minum air yang cukup. Remaja membutuhkan nutrisi yang mencukupi untuk mendukung pertumbuhan dan perkembangan tubuh, sehingga memperhatikan keberagaman dalam jenis makanan dapat membantu memastikan penerimaan nutrisi yang seimbang. Selain itu, tetap aktif secara fisik juga penting untuk memelihara kesehatan secara keseluruhan. Jika Anda memiliki pertanyaan lebih lanjut atau memerlukan panduan spesifik terkait pola makan, disarankan untuk berkonsultasi dengan dokter atau ahli gizi",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Dengan persentase resiko diabetes yang rendah, BMI dalam kisaran normal, dan usia dewasa, sangat penting untuk menjaga pola makan sehat guna mendukung kesejahteraan dan pencegahan penyakit. Fokus pada konsumsi makanan yang kaya serat, seperti sayuran, buah-buahan, dan biji-bijian utuh, serta memilih sumber protein rendah lemak. Hindari makanan tinggi gula, lemak jenuh, dan garam berlebihan. Perhatikan porsi makan agar tetap seimbang dengan kebutuhan energi harian Anda. Sebaiknya mengonsumsi makanan dengan indeks glikemik rendah untuk menjaga tingkat gula darah tetap stabil. Selain itu, jangan lupakan pentingnya hidrasi yang cukup dengan meminum air secara teratur. Menjaga pola makan yang sehat akan membantu menjaga kesehatan jantung, mengelola berat badan, dan memberikan dukungan optimal bagi tubuh Anda dalam menjalani kehidupan dewasa yang aktif. Jika memiliki pertanyaan lebih lanjut atau memerlukan panduan khusus, sebaiknya konsultasikan dengan dokter atau ahli gizi untuk rekomendasi yang lebih personal.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Dengan persentase resiko diabetes yang rendah, BMI dalam kisaran normal, dan usia lanjut, penting untuk mempertahankan pola makan yang mendukung kesehatan optimal pada tahap kehidupan ini. Fokus pada konsumsi makanan yang kaya nutrisi, seperti sayuran berwarna-warni, buah-buahan, biji-bijian utuh, dan sumber protein seimbang. Pilihlah makanan yang tinggi serat untuk mendukung pencernaan dan menjaga tingkat gula darah tetap stabil. Hindari makanan olahan tinggi gula dan lemak jenuh serta batasi asupan garam. Penting juga untuk memperhatikan porsi makan agar sesuai dengan kebutuhan energi tubuh pada usia lanjut. Asupan cairan yang cukup juga menjadi faktor kunci, pastikan untuk minum air secara teratur. Sementara itu, berkonsultasilah dengan dokter atau ahli gizi untuk mendapatkan panduan lebih lanjut yang sesuai dengan kebutuhan kesehatan individu Anda pada usia lanjut ini.",
        };
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
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, namun BMI berada pada kategori overweight, dan usia masih dalam kategori anak-anak, penting untuk memberikan perhatian khusus pada pola makan untuk mendukung keseimbangan berat badan sehat. Disarankan untuk mengonsumsi makanan yang kaya akan nutrisi, seperti buah-buahan, sayuran, sumber protein tanpa lemak, dan biji-bijian utuh. Hindari makanan tinggi gula, lemak jenuh, dan makanan olahan. Perhatikan porsi makan agar sesuai dengan kebutuhan tubuh dalam fase pertumbuhan, dan dorong untuk tetap aktif secara fisik. Pilihan makanan sehat dan gaya hidup aktif dapat membantu mencapai berat badan yang sehat pada usia anak-anak, sambil tetap mendukung pertumbuhan dan perkembangan tubuh secara optimal. Jika ada kekhawatiran lebih lanjut atau pertanyaan mengenai pola makan, sebaiknya berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan panduan yang lebih spesifik sesuai dengan kebutuhan anak Anda.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, namun BMI berada dalam kategori overweight, dan usia masih pada tahap remaja, sangat penting untuk memperhatikan pola makan guna mencapai berat badan yang sehat dan mendukung kesejahteraan Anda secara keseluruhan. Fokuslah pada konsumsi makanan seimbang yang mengandung nutrisi esensial, termasuk sayuran, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Batasi asupan makanan tinggi gula, lemak jenuh, dan makanan olahan. Perhatikan porsi makan agar sesuai dengan kebutuhan tubuh Anda dalam fase pertumbuhan. Penting juga untuk tetap aktif secara fisik dan mencari kegiatan yang Anda nikmati untuk membantu menjaga berat badan sehat. Jika Anda memiliki pertanyaan lebih lanjut atau perlu panduan lebih spesifik mengenai pola makan yang sesuai dengan kebutuhan remaja, sebaiknya berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan rekomendasi yang lebih personal dan terarah.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, meskipun BMI berada pada kategori overweight, dan usia Anda sudah mencapai tahap dewasa, sangat penting untuk fokus pada pola makan sehat guna menjaga keseimbangan berat badan dan mendukung kesehatan secara keseluruhan. Pilihlah makanan yang kaya akan nutrisi seperti sayuran, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Batasi konsumsi makanan tinggi gula, lemak jenuh, dan hindari makanan olahan yang tinggi kalori. Perhatikan porsi makan agar sesuai dengan kebutuhan energi harian dan pertahankan gaya hidup aktif. Lebih lanjut, pertimbangkan untuk berkonsultasi dengan ahli gizi atau dokter untuk mendapatkan saran yang lebih spesifik mengenai pola makan yang dapat membantu Anda mencapai dan menjaga berat badan yang sehat pada tahap dewasa ini.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, meskipun BMI berada pada kategori overweight, dan usia Anda telah mencapai tahap lanjut, sangat penting untuk memberikan perhatian khusus pada pola makan untuk mendukung kesehatan jangka panjang. Pilihlah makanan yang kaya akan nutrisi seperti sayuran berwarna-warni, buah-buahan, sumber protein seimbang, dan biji-bijian utuh. Batasi konsumsi makanan tinggi gula dan lemak jenuh, serta hindari makanan olahan yang dapat meningkatkan risiko penyakit terkait usia. Perhatikan porsi makan agar sesuai dengan kebutuhan energi tubuh pada tahap lanjut ini. Penting juga untuk tetap hidrasi dengan minum cukup air setiap hari. Mempertahankan pola makan seimbang ini dapat membantu menjaga berat badan yang sehat dan mendukung kesehatan umum pada usia tua. Untuk rekomendasi yang lebih personal dan terarah, disarankan untuk berkonsultasi dengan dokter atau ahli gizi yang dapat memberikan panduan sesuai dengan kebutuhan kesehatan individu Anda.",
        };
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
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, namun BMI berada dalam kategori obese, dan usia masih pada tahap anak-anak, penting untuk memberikan perhatian khusus pada pola makan guna mencapai berat badan yang sehat dan mendukung kesejahteraan Anda secara holistik. Fokus pada konsumsi makanan yang kaya nutrisi seperti sayuran, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Hindari makanan tinggi gula, lemak jenuh, serta batasi asupan makanan olahan. Perhatikan porsi makan agar sesuai dengan kebutuhan tubuh dalam fase pertumbuhan. Selain itu, dorong untuk tetap aktif secara fisik dengan melakukan kegiatan yang sesuai untuk anak-anak. Kombinasi pola makan sehat dan aktivitas fisik dapat membantu mencapai dan menjaga berat badan yang sehat. Jika ada kekhawatiran lebih lanjut atau pertanyaan mengenai pola makan, sebaiknya berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan panduan yang lebih spesifik sesuai dengan kebutuhan kesehatan anak Anda.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, meskipun BMI berada dalam kategori obese, dan usia Anda masih pada tahap remaja, fokus utama adalah pada perubahan pola makan untuk mencapai berat badan yang sehat dan mendukung kesejahteraan Anda. Prioritaskan konsumsi makanan yang kaya nutrisi seperti sayuran berwarna-warni, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Hindari makanan tinggi gula, lemak jenuh, serta batasi asupan makanan olahan. Perhatikan porsi makan agar sesuai dengan kebutuhan tubuh dalam fase pertumbuhan remaja. Memilih makanan yang memberikan nutrisi yang cukup tanpa meningkatkan risiko diabetes dapat membantu mengelola berat badan secara efektif. Penting juga untuk menjaga keberagaman dalam jenis makanan dan memprioritaskan keseimbangan nutrisi. Untuk rekomendasi yang lebih spesifik, sebaiknya berkonsultasi dengan dokter atau ahli gizi yang dapat memberikan panduan sesuai dengan kebutuhan kesehatan remaja Anda pada situasi ini.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, meskipun BMI berada dalam kategori obese, dan usia Anda sudah mencapai tahap dewasa, fokus utama harus diberikan pada perubahan pola makan untuk mencapai berat badan yang sehat dan mendukung kesejahteraan Anda. Pilihlah makanan yang kaya nutrisi seperti sayuran berwarna-warni, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Hindari makanan tinggi gula, lemak jenuh, serta batasi asupan makanan olahan. Perhatikan porsi makan agar sesuai dengan kebutuhan tubuh dewasa Anda. Jangan lupakan pentingnya mengelola asupan kalori secara keseluruhan dan mempertimbangkan pilihan makanan rendah kalori untuk membantu menurunkan berat badan secara bertahap. Penting juga untuk menjaga keseimbangan nutrisi dan memprioritaskan makanan yang memberikan energi tanpa memberikan beban berlebih pada tubuh. Untuk panduan yang lebih spesifik, sebaiknya berkonsultasi dengan dokter atau ahli gizi yang dapat memberikan rekomendasi makanan yang sesuai dengan kebutuhan kesehatan Anda pada tahap dewasa ini.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Berdasarkan hasil analisis kesehatan Anda yang menunjukkan persentase risiko diabetes rendah, meskipun BMI berada dalam kategori obese, dan usia Anda telah mencapai tahap lanjut, perubahan dalam pola makan dapat menjadi fokus utama untuk mendukung kesehatan Anda. Prioritaskan konsumsi makanan yang kaya nutrisi seperti sayuran berwarna-warni, buah-buahan, sumber protein tanpa lemak, dan biji-bijian utuh. Hindari makanan tinggi gula, lemak jenuh, serta batasi asupan makanan olahan. Perhatikan porsi makan agar sesuai dengan kebutuhan tubuh pada tahap lanjut ini. Memilih makanan yang memberikan nutrisi yang cukup tanpa meningkatkan risiko diabetes dapat membantu mengelola berat badan secara efektif. Penting juga untuk menjaga keberagaman dalam jenis makanan dan memprioritaskan keseimbangan nutrisi. Untuk rekomendasi yang lebih spesifik mengenai pola makan yang sesuai dengan kebutuhan kesehatan Anda pada usia lanjut ini, sebaiknya berkonsultasi dengan dokter atau ahli gizi.",
        };
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
        return {
          list: rec,
          text: "Anak-anak dengan BMI normal atau kurus dan risiko diabetes di bawah 70% disarankan untuk menjaga pola makan yang seimbang dan mengedepankan nutrisi esensial dalam setiap asupan. Lalu mengonsumsi makanan yang kaya serat seperti sayuran hijau bayam dan brokoli, sumber protein seimbang seperti ikan salmon, tahu untuk mendukung pertumbuhan dan kesehatan yang optimal. Serta memberikan perhatian khusus pada makanan yang mengandung zat besi, kalsium, dan vitamin D seperti tahu yang dapat membantu memenuhi kebutuhan nutrisi selama masa pertumbuhan.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Bagi Remaja dengan BMI normal atau kurus serta risiko diabetes di bawah 70% disarankan untuk tetap menjaga pola makan seimbang dan sehat. Hindari makanan cepat saji dan instan yang kurang bergizi. Konsumsi sayuran hijau seperti brokoli dan bayam, kacang-kacangan, bawang putih, dan umbi yang baik untuk penderita diabetes sebagai sumber vitamin, mineral dan antioksidan.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Untuk usia dewasa dengan BMI normal atau kurus serta risiko diabetes di bawah 70% tetap perlu menjaga gaya hidup sehat. Pola makan seimbang harus dipertahankan, hindari makanan olahan dan cepat saji. Fokus pada konsumsi makanan yang kaya serat seperti sayuran hijau yaitu bayam dan brokoli, kacang-kacangan seperti kacang almond, protein tanpa lemak, dan vitamin pada bawang putih. Hindarilah makanan tinggi lemak jenuh, gula tambahan, dan makanan olahan.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Lansia dengan BMI normal atau kurus serta risiko diabetes di bawah 70% perlu menjaga kesehatan dengan gizi yang seimbang. Pola makan bergizi perlu dipertahankan dengan mengonsumsi sayuran hijau setiap hari. Karbohidrat kompleks seperti ubi jalar yang direbus dapat menjadi sumber energi yang tepat. Protein nabati seperti kacang almond memberikan manfaat bagi tubuh. Minum air putih cukup dan hindari makanan tinggi lemak atau pedas agar pencernaan lancar.",
        };
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
        return {
          list: rec,
          text: "Untuk anak-anak dengan BMI overweight serta risiko diabetes di bawah 70% disarankan untuk memilih makanan sehat dan seimbang. Hindari cemilan maupun makanan olahan tinggi gula seperti mie instan. Konsumsi sayuran hijau seperti bayam dan brokoli setiap hari sebagai sumber serat, vitamin dan protein. Karbohidrat bersumber dari ubi jalar. Ikan salmon bisa menjadi pilihan protein.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Remaja dengan BMI overweight dan risiko diabetes di bawah 70% disarankan untuk memperhatikan pola makan dengan cerdas. Pilihlah makanan yang memberikan nutrisi optimal seperti sayuran hijau, kacang-kacangan, umbi-umbi yang baik untuk penderita diabetes, dan sumber protein sehat. Hindari makanan olahan tinggi gula dan lemak, serta pilih camilan sehat seperti kacang almond yang rendah lemak.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Bagi usia dewasa dengan BMI overweight dan risiko diabetes di bawah 70% disarankan untuk melakukan pola makan yang sehat dan seimbang. Fokus pada mengurangi asupan kalori berlebih dan makanan tinggi lemak jenuh. Pilihlah makanan yang rendah lemak, kaya serat, dan mengandung nutrisi penting seperti sayuran bayam, kacang almond, ubi jalar, dan protein tanpa lemak. Serta batasi konsumsi makanan olahan, makanan manis, dan minuman bersoda.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Lansia dengan BMI overweight dan risiko diabetes di bawah 70% disarankan untuk melakukan pola makan yang sehat guna menjaga kesehatan secara optimal. Hindari makanan berkalori tinggi seperti gorengan dan makanan cepat saji. Konsumsi sayur-sayuran seperti brokoli dan bayam, bawang putih untuk mendapatkan serat, vitamin, serta mineral yang dibutuhkan.",
        };
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
        return {
          list: rec,
          text: "Untuk anak-anak dengan BMI obese dan risiko diabetes di bawah 70% disarankan untuk merancang pola makan yang mendukung kesehatan optimal. Pilihlah makanan yang kaya akan nutrisi seperti sayur bayam, sayur brokoli, dan sumber protein yang seimbang. Hindari makanan tinggi gula, lemak jenuh, dan karbohidrat olahan. Camilan sehat seperti kacang almond dan ubi jalar dapat menjadi pilihan yang baik.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Remaja dengan BMI obese serta risiko diabetes di bawah 70% disarankan untuk mengonsumsi makanan seimbang dan bergizi. Hindari makanan oleh-oleh dan cemilan instan tinggi gula serta lemak. Konsumsi sayuran hijau seperti bayam dan brokoli setiap hari, dan bawang putih untuk vitamin. Pilih karbohidrat seperti ubi jalar. Protein bisa berasal dari kacang-kacangan dan ikan salmon.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Dewasa dengan BMI obese serta risiko diabetes di bawah 70% disarankan menjalankan pola makan seimbang dan sehat. Hindari makanan siap saji dan cemilan tinggi lemak serta gula. Konsumsilah sayuran hijau, dan protein nabati seperti kacang-kacangan setiap hari. Serta vitamin yang terdapat pada bawang putih dan ubi jalar.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Lansia dengan BMI obese dan risiko diabetes di bawah 70% disarankan untuk melakukan pola makan yang sehat guna menjaga kesehatan secara optimal. Prioritaskan konsumsi makanan yang rendah kalori, rendah lemak, dan tinggi serat seperti sayuran hijau, tahu, ubi jalar yang direbus, vitamin pada bawang putih, kacang almond, dan protein tanpa lemak. Hindarilah makanan olahan, makanan manis, minuman berkalori tinggi, serta makanan yang mengandung lemak jenuh. Penting juga untuk memperhatikan ukuran porsi makan dan menghindari makan berlebihan.",
        };
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
        return {
          list: rec,
          text: "Anak-anak dengan BMI normal atau kurus dan risiko diabetes di atas 70% disarankan untuk memperhatikan faktor makanan. Sebaiknya, dengan mengonsumsi makanan yang rendah gula, rendah lemak, dan tinggi serat. Termasuk dalam pola makan sehat ini adalah sayuran hijau seperti bayam, brokoli, sumber protein rendah lemak seperti ikan salmon dan daging tanpa lemak, protein nabati seperti tahu, serta karbohidrat kompleks seperti ubi jalar. Menghindari makanan yang tinggi gula tambahan dan lemak jenuh dapat membantu menjaga keseimbangan gula darah dan mencegah perkembangan risiko diabetes.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Bagi remaja dengan BMI normal atau kurus dan risiko diabetes di atas 70% disarankan untuk mengatur pola makan yang berfokus pada kontrol gula darah dan penurunan risiko diabetes. Sebagai rekomendasi, disarankan untuk memilih makanan yang rendah indeks glikemik seperti sayuran hijau bayam, brokoli, dan sumber protein tanpa lemak. Dan Pastikan untuk minum air yang cukup dan menghindari minuman beralkohol.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Dewasa dengan BMI normal atau kurus dan risiko diabetes di atas 70%, disarankan untuk melakukan pola makan yang sehat dan seimbang. Fokus pada konsumsi makanan yang kaya serat seperti sayuran hijau yaitu bayam dan brokoli, kacang-kacangan seperti kacang almond, dan protein tanpa lemak. Hindarilah makanan tinggi lemak jenuh, gula tambahan, dan makanan olahan. Serta juga dapat mempertimbangkan untuk mengonsumsi ikan berlemak seperti salmon yang kaya akan asam lemak omega-3 yang baik untuk kesehatan jantung.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Untuk lansia dengan BMI normal atau kurus dan risiko diabetes di atas 70% disarankan untuk memperhatikan pola makan. Sebagai rekomendasi, sangat disarankan untuk mengonsumsi makanan yang rendah gula, rendah karbohidrat, dan kaya serat. Termasuk sayuran hijau, seperti bayam dan brokoli, protein tanpa lemak seperti ikan salmon, serta sumber lemak sehat seperti tahu dan kacang-kacangan. Selain itu, menghindari makanan olahan, makanan manis, dan minuman bersoda sangat disarankan.",
        };
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
        return {
          list: rec,
          text: "Anak-anak dengan BMI overweight dan risiko diabetes di atas 70% disarankan untuk mengonsumsi makanan yang rendah kalori, gula, dan lemak jenuh. Seperti sayuran hijau bayam dan brokoli, sumber protein tanpa lemak  dan nabati seperti ikan, tahu, dan kacang-kacangan. Rekomendasi ini didasarkan pada fakta bahwa anak dengan BMI overweight memiliki risiko lebih tinggi untuk terkena diabetes. Hal ini disebabkan karena anak dengan BMI overweight memiliki lebih banyak lemak tubuh, yang dapat meningkatkan produksi dan resistensi insulin.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Untuk remaja dengan BMI overweight dan risiko diabetes di atas 70% disarankan untuk mengurangi risiko dengan perubahan pola makan yang tepat. Tingkatkan konsumsi sayur seperti brokoli dan bayam, bawang putih, ubi jalar, dan tahu sebagai sumber serat, vitamin, dan mineral penting untuk kesehatan. Batasi gula dan lemak jenuh yang dapat meningkatkan risiko diabetes, serta pastikan asupan protein cukup seperti kacang almond dan ikan salmon untuk menjaga massa otot dan meningkatkan rasa kenyang.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Bagi usia dewasa dengan BMI overweight risiko diabetes di atas 70% disarankan untuk mengurangi asupan makanan berkalori tinggi dan mengkonsumsi makanan yang mengandung serat tinggi. Hindari makanan olahan, gula tambahan, dan minyak yang tidak sehat. Fokus pada asupan sayuran hijau seperti bayam dan brokoli, kacang almond, dan ubi jalar sebagai sumber karbohidrat sehat, dan bawang putih sebagai vitamin.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Lansia dengan BMI overweight dan risiko diabetes di atas 70% disarankan untuk melakukan pola makan yang khusus untuk usia lanjut. Disarankan untuk mengonsumsi makanan-makanan yang sehat dan bergizi untuk menjaga berat badan serta kadar gula darahnya. Beberapa makanan yang dapat direkomendasikan adalah sayuran hijau seperti bayam dan brokoli, tahu, ubi jalar, ikan salmon, dan bawang putih yang kaya serat serta vitamin dan mineral untuk mendukung sistem pencernaan dan kekebalan tubuh.",
        };
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
        return {
          list: rec,
          text: "Bagi anak-anak dengan BMI obese dan risiko diabetes di atas 70% disarankan untuk melakukan pola makan yang sehat dan seimbang. Disarankan untuk mengurangi risiko diabetes meliputi menghindari makanan tinggi gula. Dan meningkatkan konsumsi serat, protein, dan lemak sehat. Dalam hal ini, disarankan untuk mengkonsumsi lebih banyak sayuran hijau, umbi-umbian yang baik untuk penderita diabetes, protein tanpa lemak seperti ikan salmon, kacang almond, dan ubi jalar.",
        };
      }
      if (ageCategory === "teen" || ageCategory === "young adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Remaja dengan BMI obese dan risiko diabetes di atas 70% disarankan untuk mengurangi asupan makanan berkalori tinggi dan meningkatkan asupan sayuran serta buah-buahan. Makanan-makanan yang dianjurkan untuk dikonsumsi adalah sayuran hijau seperti brokoli dan bayam karena rendah kalori namun tinggi serat dan vitamin pada tahu dan bawang putih.",
        };
      }
      if (ageCategory === "adult") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Untuk Dewasa dengan BMI obese dan risiko diabetes di atas 70% disarankan untuk mengambil langkah-langkah penting dalam mengelola pola makannya. Disarankan untuk mengonsumsi makanan rendah gula, rendah lemak, dan kaya serat seperti sayuran hijau brokoli dan bayar, ubi jalar yang baik untuk penderita diabetes, dan sumber protein yang seimbang. Dan penting untuk membatasi asupan makanan tinggi gula, lemak jenuh, serta mengurangi konsumsi karbohidrat olahan.",
        };
      }
      if (ageCategory === "elder") {
        rec.push(listMakanan[0]);
        rec.push(listMakanan[1]);
        rec.push(listMakanan[2]);
        rec.push(listMakanan[3]);
        rec.push(listMakanan[4]);
        rec.push(listMakanan[5]);
        rec.push(listMakanan[6]);
        return {
          list: rec,
          text: "Bagi lansia dengan BMI obese dan risiko diabetes di atas 70% disarankan untuk mengonsumsi makanan yang mudah dicerna dan mengurangi porsi makan. Protein nabati seperti tahu dan kacang-kacangan seperti kacang almond yang direndam agar lebih mudah dicerna tubuh. Sayuran seperti bayam dan brokoli untuk mendapatkan serat, vitamin dan mineral. Dan untuk sumber karbohidrat, pilih makanan seperti ubi jalar yang lebih rendah gula daripada nasi putih.",
        };
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
  if (age < 20) return "teen";
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