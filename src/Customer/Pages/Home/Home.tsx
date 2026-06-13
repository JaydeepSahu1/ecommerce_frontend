import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategortGrid/CategoryGrid'
import Deal from './Deal/Deal'
import { Shop, Storefront } from '@mui/icons-material'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Home = () => {

const navigate=useNavigate();

  return (
    <div>
      <div className='space-y-5 lg:space-y-10 relative pb-20'>

        <ElectricCategory />

        <CategoryGrid />

        <>
          <h1 className='text-lg text-center lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20'>
            Today's Deals</h1>
          <Deal />
        </>


        <>
          <h1 className='text-lg text-center lg:text-4xl font-bold text-primary-color pb-5 lg:pb-20'>
            Shop By Category</h1>
          <ShopByCategory />
        </>

        <section className='lg:px-20 relative h-[200px] lg:h-[450px] objrct-cover'>
          <img className='w-full h-full'
           src='https://images.surferseo.art/5d703285-40d5-4187-9800-18c01aa98006.jpeg'
          alt="" />
          <div className='absolute top-1/2 left-4 lg:left-[15rem] translate 
          -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>

            <h1>Sell your Product</h1>
            <p className='text-lg md:text-2xl'>With <span className='logo'>Mamta Bazar</span></p>
            
            <div className='pt-6 flex justify-center'>
              <Button 
               onClick={()=>navigate("/become-seller")}
              startIcon={<Storefront />} variant='contained' size='large'>
                Become a Seller
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home