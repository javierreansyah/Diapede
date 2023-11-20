const diabetesFn = (percentage) => {
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

export const Recommendation = (data) => {
  return {
    summary: diabetesFn(data.Percentage),
  };
};
