import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Customer/Components/Navbar';
import customTheme from './Theme/CustomTheme';
import Home from './Customer/Pages/Home/Home';
import Product from './Customer/Pages/Product/Product';
import { ProductDetails } from './Customer/Pages/Product Details/ProductDetails';
import Review from './Customer/Pages/Reviews/Review';
import Cart from './Customer/Pages/Cart/Cart';
import Account from './Customer/Pages/Account/Account';
import Checkout from './Customer/Pages/CheckOut/Checkout';
import BecomeSeller from './Customer/Pages/Become Seller/BecomeSeller';
import SellerDashboard from './Seller/Page/SellerDashBoard/SellerDashboard';
import AdminDashBoard from './Admin/Pages/DashBoard/AdminDashBoard';
import { useAppDispatch } from './State/Store';
import { fetchSellerProfile } from './State/Seller/sellerSlice';


function App() {

  const dispatch=useAppDispatch();

  useEffect(()=> {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt")||""))
  },[])
  
  return (
    <ThemeProvider theme={customTheme}>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/product-detail/:categoryID/:name/:productId" element={<ProductDetails />} />
        <Route path="/review/:productId" element={<Review />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/become-seller" element={<BecomeSeller />} />

        <Route path="/seller/*" element={<SellerDashboard />} />
        
        <Route path="/admin/*" element= {<AdminDashBoard />} />

      </Routes>

    </ThemeProvider>
  );
}

export default App;
