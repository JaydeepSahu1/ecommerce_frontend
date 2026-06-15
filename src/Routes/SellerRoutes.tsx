import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Seller/Page/SellerDashBoard/DashBoard'
import AddProduct from '../Seller/Page/Product/AddProduct'
import Profile from '../Seller/Page/Account/Profile'
import Payment from '../Seller/Page/Payment/Payment'
import Transaction from '../Seller/Page/Payment/Transaction'
import Product from '../Seller/Page/Product/Product'
import Order from '../Seller/Page/Orders/Order'

const SellerRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/products" element={<Product />} />
                <Route path="/add-products" element={<AddProduct />} />
                <Route path="/orders" element={<Order />} />
                <Route path="/account" element={<Profile />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/transaction" element={<Transaction />} />
            </Routes>
        </div>
    )
}

export default SellerRoutes