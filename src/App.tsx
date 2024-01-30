import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from 'pages/main/Main';
import Brands from 'pages/brands/Brands';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brands" element={<Brands />} />
    </Routes>
  );
}

export default App;
