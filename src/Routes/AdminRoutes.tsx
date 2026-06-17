import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerTable from '../Admin/Pages/Sellers/SellerTable'
import Coupon from '../Admin/Pages/Coupon/Coupon'
import AddNewCoupon from '../Admin/Pages/Coupon/AddNewCoupon'
import GridTable from '../Admin/Pages/HomePage/GridTable'
import ElectronicTable from '../Admin/Pages/HomePage/ElectronicTable'
import ShopByCategoryTable from '../Admin/Pages/HomePage/ShopByCategoryTable'
import Deal from '../Admin/Pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SellerTable />} />
             <Route path='/coupon' element={<Coupon />} />
              <Route path='/add-coupon' element={<AddNewCoupon />} />
               <Route path='/home-grid' element={<GridTable />} />
                <Route path='/electronics-category' element={<ElectronicTable />} />
                 <Route path='/shop-by-category' element={<ShopByCategoryTable />} />
                  <Route path='/deals' element={<Deal />} />
        </Routes>
    </div>
  )
}

export default AdminRoutes