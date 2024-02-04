import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from 'pages/main/Main';
import Brands from 'pages/brands/Brands';
import Sustainability from 'pages/sustainability/Sustainability';
import SelfDiagnosis from 'pages/self-diagnosis/SelfDiagnosis';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/sustainability/self-diagnosis" element={<SelfDiagnosis />} />
    </Routes>
  );
}

export default App;
