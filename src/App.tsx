import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';

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
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchSellerProfile } from './State/Seller/sellerSlice';
import Auth from './Customer/Pages/Auth/Auth';
import { fetchUserProfile } from './State/AuthSlice';


function App() {

  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector(store => store)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
  }, [])

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller")
    }
  }, [seller.profile])

  useEffect(() => {
    const token = auth.jwt || localStorage.getItem("jwt");

    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [auth.jwt, dispatch]);


  return (
    <ThemeProvider theme={customTheme}>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/products/:category" element={<Product />} />
        <Route path="/product-details/:categoryId/:title/:productid" element={<ProductDetails />} />
        <Route path="/review/:productId" element={<Review />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/become-seller" element={<BecomeSeller />} />

        <Route path="/seller/*" element={<SellerDashboard />} />

        <Route path="/admin/*" element={<AdminDashBoard />} />

      </Routes>

    </ThemeProvider>
  );
}

export default App;
