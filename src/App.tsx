import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/main';
import Brands from 'pages/brands';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brands" element={<Brands />} />
    </Routes>
  );
}

export default App;
