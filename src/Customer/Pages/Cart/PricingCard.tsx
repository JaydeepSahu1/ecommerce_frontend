import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
      <div className='space-y-3 p-5'>

        <div className='flex justify-between items-center'>

          <span>Subtotal</span>
          <span>rs.999</span>

        </div>

        <div className='flex justify-between items-center'>

          <span>Discount</span>
          <span>- rs.400</span>

        </div>

        <div className='flex justify-between items-center'>

          <span>Shipping</span>
          <span>rs.100</span>

        </div>

        <div className='flex justify-between items-center'>

          <span>Platform Fee</span>
          <span>rs.10</span>

        </div>

      </div>

      <Divider />

      <div className='flex justify-between items-center p-5 text-primary-color font-semibold'>

        <span>Total</span>
        <span>rs.???</span>

      </div>



    </>
  )
}

export default PricingCard