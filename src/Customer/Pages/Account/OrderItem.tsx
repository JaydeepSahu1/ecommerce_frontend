import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer '>

      <div className='flex items-center gap-5'>
        <div >
          <Avatar sizes='small' sx={{bgcolor:teal[500]}}>
            <ElectricBolt/>
          </Avatar>
        </div>
        <div>
          <h1 className='font-bold text-primary-color'>
            Pending
          </h1>
          <p>
            Arriving by Mon,15 Jun
          </p>
        </div>
      </div>

      <div className='p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className='w-[70px]'
           src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjkTN65Vf9dSCZNKG06m-4TsuTeutwGlq6bV6l80_eJlh8TNcQjiqvFA0PKPZrx3zPjW5QKjNZX4gcSjBjP1rm7SW5DUxY-7Xm7dQzmuO6X41etUBcuIkMcDYZAwVGV_uoA7yHEoZP&usqp=CAc '
          alt=''/>

        </div>

        <div className='w-full space-y-2'>
          <h1 className='font-bold'>Ram Cothing</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, corrupti?</p>
          <p><strong>Size:</strong> Large </p>
        </div>

      </div>

    </div>
  )
}

export default OrderItem