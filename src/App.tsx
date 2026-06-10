import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Customer/Components/Navbar';
import customTheme from './Theme/CustomTheme';
import Home from './Customer/Pages/Home/Home';
import Product from './Customer/Pages/Product/Product';
import { ProductDetails } from './Customer/Pages/Product Details/ProductDetails';
import Review from './Customer/Pages/Reviews/Review';
import Cart from './Customer/Pages/Cart/Cart';
import Checkout from './Customer/Pages/CheckOut/Checkout';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
           <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/review" element={<Review />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
