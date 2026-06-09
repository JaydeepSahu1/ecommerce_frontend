import React from 'react'
import ReviewCard from './ReviewCard'
import { Divider, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { red } from '@mui/material/colors'

const Review = () => {
    return (
        <div className='p-5 lg:px-20 flex flex-col lf:flex-row gap-20'>

            <section className='w-full  md:w-1/2 lg:w-[30%] space-y-2'>

                <img
                    src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjkTN65Vf9dSCZNKG06m-4TsuTeutwGlq6bV6l80_eJlh8TNcQjiqvFA0PKPZrx3zPjW5QKjNZX4gcSjBjP1rm7SW5DUxY-7Xm7dQzmuO6X41etUBcuIkMcDYZAwVGV_uoA7yHEoZP&usqp=CAc '

                    alt=''
                />

                <div>
                    <div>

                        <p className='font-bold text-xl'>
                            Ram Clothing
                        </p>
                        <p className=' text-lg text-gray-600'>
                            Men Blue T-Shirt
                        </p>
                    </div>

                    <div>
                        <div className='price flex items-center gap-3 mt-5 text-2xl'>

                            <span className='font-semibold text-gray-800'>
                                ₹ 400
                            </span>
                            <span className='line-through text-gray-400'>
                                mrp ₹ 999
                            </span>
                            <span className='text-primary-color font-semibold'>
                                60% Off
                            </span>
                        </div>

                    </div>
                </div>

            </section>

            <section className='space-y-5 w-full'>
                {[1, 1, 1, 1, 1, 1, 1].map((item) => <div className='space-y-3'> <ReviewCard />
                    <Divider /> </div>)}

                <IconButton >
                    <Delete sx={{ color: red[700] }} />
                </IconButton>

            </section>

        </div>
    )
}

export default Review