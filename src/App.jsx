import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Navbar, Heros, Footer, Checkup, Result } from "./components/index";

const App = () => {
  const [response, setResponse] = useState({
    beratBadan: 12,
    faktorGenetik: 12,
    glukosa: 12,
    insulin: 12,
    jumlahKehamilan: 12,
    tekananDarah: 12,
    tinggi: 12,
    umur: 12,
    Percentage: 70,
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Heros />} />
        <Route
          path="/checkup"
          element={<Checkup setResponse={setResponse} />}
        />
        <Route path="/hasil" element={<Result response={response} />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
