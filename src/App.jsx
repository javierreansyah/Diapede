import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, Heros, Footer, Checkup, Contact } from "./components/index";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Heros />} />
      <Route path="/checkup" element={<Checkup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
);

export default App;
