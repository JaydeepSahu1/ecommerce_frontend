import { Add, AddAPhoto, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {

    const handleUpdateQuantity = () => {

    }

    return (
        <div className='border rounded-md relative'>

            <div className='p-5 flex gap-3'>

                <div>
                    <img className='w-[90px] rounded-md'
                        src='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjkTN65Vf9dSCZNKG06m-4TsuTeutwGlq6bV6l80_eJlh8TNcQjiqvFA0PKPZrx3zPjW5QKjNZX4gcSjBjP1rm7SW5DUxY-7Xm7dQzmuO6X41etUBcuIkMcDYZAwVGV_uoA7yHEoZP&usqp=CAc '
                        alt=''
                    />
                </div>

                <div className='space-y-2'>

                    <h1 className='font font-semibold text-lg'>
                        Ram Colthing
                    </h1>

                    <p className='text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, quaerat!</p>

                    <p className='text-xs text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, animi.</p>

                    <p><strong>quantity : </strong> 5</p>


                </div>



            </div>

            <Divider />

            <div className='flex justify-between items-center'>
                <div className='px-5 py-2 flex justify-between items-center'>

                    <div className='flex items-center gap-2 w-[140px] justify-between'>

                        <Button onClick={handleUpdateQuantity} disabled={true}>
                            <Remove />
                        </Button>
                        <span>
                            {5}
                        </span>
                        <Button onClick={handleUpdateQuantity}>
                            <Add />
                        </Button>
                    </div>

                </div>

                <div className='pr-5'>
                    <p className='text-gray-700 font font-medium'>
                        rs 799
                    </p>
                </div>
            </div>

            <div className='absolute top-1 right-1'>
                <IconButton color='primary'>
                    <Close />
                </IconButton>
            </div>

        </div>
    )
}

export default CartItem
