import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Customer/Components/Navbar';
import customTheme from './Theme/CustomTheme';
import Home from './Customer/Pages/Home/Home';
import Product from './Customer/Pages/Product/Product';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
