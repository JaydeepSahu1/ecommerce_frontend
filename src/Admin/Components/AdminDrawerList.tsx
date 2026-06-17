import React from 'react'
import DrawerList from '../../Seller/Components/DrawerList'
import { Home, Category, ElectricBolt, LocalOffer, Logout, Add, IntegrationInstructions, Dashboard, AccountBox } from '@mui/icons-material'



const menu = [
       {
        name: "DashBoard",
        path: "/admin",
        icon: <Dashboard className='text-primary-color' />,
        activeIcon: <Dashboard className='text-white' />
    },
    {
        name: "Coupons",
        path: "/admin/coupon",
        icon: <IntegrationInstructions className='text-primary-color' />,
        activeIcon: <IntegrationInstructions className='text-white' />
    },
    {
        name: "Add Coupon",
        path: "/admin/add-coupon",
        icon: <Add className='text-primary-color' />,
        activeIcon: <Add className='text-white' />
    },
    {
        name: "Home Page",
        path: "/admin/home-grid",
        icon: <Home className='text-primary-color' />,
        activeIcon: <Home className='text-white' />
    },

    {
        name: "Electroic Category",
        path: "/admin/electronics-category",
        icon: <ElectricBolt className='text-primary-color' />,
        activeIcon: <ElectricBolt className='text-white' />
    },
    {
        name: "Shop BY Category",
        path: "/admin/shop-by-category",
        icon: <Category className='text-primary-color' />,
        activeIcon: <Category className='text-white' />
    },
    {
        name: "Deals",
        path: "/admin/deals",
        icon: <LocalOffer className='text-primary-color' />,
        activeIcon: <LocalOffer className='text-white' />
    }
]

const menu2 = [
    {
        name: "Account",
        path: "/seller/account",
        icon: <AccountBox className='text-primary-color' />,
        activeIcon: <AccountBox className='text-white' />
    },
    {
        name: "Logout",
        path: "/",
        icon: <Logout className='text-primary-color' />,
        activeIcon: <Logout className='text-white' />

    }
]

const AdminDrawerList = ({ toggleDrawer }: any) => {
    return (

        <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    )
}

export default AdminDrawerList