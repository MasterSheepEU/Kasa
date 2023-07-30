import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import HousingSheet from "./pages/HousingSheet";
import Error404 from "./pages/Error404"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="about" element={<About />} index />


        <Route path="housingsheet">
          <Route element={<HousingSheet />} index />
          <Route path=':id' element={<HousingSheet />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


