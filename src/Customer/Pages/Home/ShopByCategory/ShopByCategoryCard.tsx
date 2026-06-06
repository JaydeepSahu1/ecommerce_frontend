import React from 'react'
import './ShopByCategory.css'

const ShopByCategoryCard = () => {
    return (
        <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>

            <div className='custom-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full
             overflow-hidden  border-red-600'>

                <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700
                object-cover object-top h-full w-full'
                    src='https://static.vecteezy.com/system/resources/thumbnails/016/363/707/small_2x/beautiful-custom-kitchen-interior-photo.jpg'
                    alt='Shop By Category' />
            </div>
            <h1>Kitchen & Table</h1>
        </div>
    )
}

export default ShopByCategoryCard